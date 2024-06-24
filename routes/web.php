<?php

use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('user', [UserController::class, 'create'])
->name('user');

Route::get('/', [UserController::class, 'all'])
->name('dashboard');

Route::post('user', [UserController::class, 'store']);
