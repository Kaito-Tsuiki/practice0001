<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    /**
     * 検証環境に応じてエラーログを書き出さないようにする
     */
    public static function outputErrorLog($msg){
        //エラーログを記録
        if(getenv('DB_user') == 'TOCOUSER' && getenv('DB_NAME') == 'C7858560' && getenv('DB_PASSWORD') == 'TOCO'){
            error_log($msg."\n", 3, "./error.log");
        }
        //エラーログを記録
        elseif(getenv('DB_USERNAME') == 'TOCOUSER' && getenv('DB_DATABASE') == 'C7858560' && getenv('DB_PASSWORD') == 'TOCO'){
            error_log($msg."\n", 3, "./error.log");
        }
        //LDAP認証によるログインを行う
        else{
            return;
        }
    }
}