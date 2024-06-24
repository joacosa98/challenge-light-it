<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Notifications\NewUser;

class UserController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('CreateUser', []);
    }

    public function all(): Response
    {
        $users = User::all();
        $data = [];

        foreach ($users as $user) {
            $documentPath = $user->document;
        

            $fileContent = Storage::disk('public')->get($documentPath);
        
                $data[] = [
                    'id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'document' => $fileContent,
                    'phoneNumber' => $user->phone_number,
                    'phoneCode' => $user->phone_code,
                ];

        }

        return Inertia::render('Dashboard', [
            'users' => $data,
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(CreateUserRequest $request): RedirectResponse
    {

        $encoded_image = base64_encode(file_get_contents($request->file('document')));
        $path = $request->email.'/image';
        Storage::disk('public')->put($path, $encoded_image);
        

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'document' => $request->email.'/image',
            'phone_number' => $request->phone,
            'phone_code' => $request->code,
        ]);


        $user->notify(new NewUser());

        return back();
    }
}
