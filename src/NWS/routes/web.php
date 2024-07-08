<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

Route::get('/', function () {
    return view('login');
});

Route::get('/', [LoginController::class, 'loginForm']);
Route::get('/login', [LoginController::class, 'loginForm']);