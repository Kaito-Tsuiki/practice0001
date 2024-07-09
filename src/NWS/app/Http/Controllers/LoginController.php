<?php

namespace App\Http\Controllers;

use App\Http\Controllers\BaseController;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Exception;

class LoginController extends BaseController
{
    /**
     * ビューの表示
     */
    public function loginForm()
    {
        return view('login');
    }

    /**
     * ログイン処理
     */
    public function loginFunc(Request $request)
    {
        try{
            return json_encode(LoginService::loginFunc($request));
        } catch (Exception $e) {
            self::outputErrorLog(print_r($e->getMessage(), true));
            throw $e;
        }   
    }
}