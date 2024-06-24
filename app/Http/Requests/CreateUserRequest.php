<?php

namespace App\Http\Requests;

use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rules\File;
use App\Models\User;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email', 'regex:/@gmail\.com$/i', Rule::unique(User::class)],
            'name' => ['required', 'string', 'regex:/^[a-zA-Z\s]+$/'],
            'document' => [
                'required',
                File::types(['jpg'])
            ],
            'code' => ['required', 'string', 'regex:/^\+\d{1,3}$/'],
            'phone' => ['required', 'string', 'regex:/^[0-9]+$/'],
        ];
    }

}
