<?php

namespace App\Services;

use App\Library\Message;
use App\Services\BaseService;
use App\Models\CoreSystemUsedCheckModel;
use App\Models\MUserModel;
use Exception;
use Illuminate\Support\Facades\DB;

//class LoginService extends BaseService{
class LoginService{

    /**
     * ログイン処理
     */
    public static function loginFunc($request){
        try {
            $id = $request->input()['id'];
            $datetime = $request->input()['datetime'];
            
            $result = MUserModel::loginFunc($id, $datetime);
            error_log(print_r($result, true)."\n",3,"./error.log");

            return $result;
        } catch (Exception $e) {
            DB::rollBack();
            throw $e;
        }
    }


}