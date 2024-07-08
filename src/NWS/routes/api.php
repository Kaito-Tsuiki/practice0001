<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//「ログイン」(ログイン情報の照合)
// Route::group(['prefix' => 'login'], function(){
//     error_log("routes\n",3,"./error.log");
//     Route::post('loginFunc', [LoginController::class, 'loginFunc']);
// });
// Route::apiResource('login/loginFunc', LoginController::class);

Route::post('/login/loginFunc', [LoginController::class, 'loginFunc']);