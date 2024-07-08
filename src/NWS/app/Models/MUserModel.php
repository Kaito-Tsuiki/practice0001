<?php

namespace App\Models;

use Exception;
use App\Models\BaseModel;
use Illuminate\Support\Facades\DB;

class MUserModel extends BaseModel{

    protected $table = 'users';

    /**
     * ユーザー情報取得
     */
    public static function getUser($id)
    {
        try{
            print_r('MUserModelPHP');
            var_dump('MUserModelPHP');
            $userId = self::where('USER_ID', $id)
            ->whereRaw("LOGIN_PERMISSION_FLG = '1'")
            ->from('users')
            ->first();

            return (isset($userId)) ? $userId->toArray() : null;
        }
        catch(Exception $e){
            throw $e;
        } 
    }

    /**
     * ログイン処理
     * 最終ログイン日時の更新とユーザー情報の取得
     */
    public static function loginFunc($id, $datetime){
        try{
            $userId = self::where('user_id', $id)->first();
            // $userId = DB::table('users')->where('user_id', $id)->first();

            return (isset($userId)) ? $userId->toArray() : null;
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * ユーザーマスタ取得
     */
    public static function getUserList($select)
    {
        try{
            $user = self::select($select)->get();
            return (isset($user)) ? $user->toArray() : null;
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * ユーザーマスタ検索
     */
    public static function searchUser($userId)
    {
        try{
            $user = self::where('USER_ID', $userId)->first();
            return (isset($user)) ? $user->toArray() : [];
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * 該当の品目レコードが変更されていないことをチェックし
     * 編集データをロックする
     */
    public static function checkDataChangedAndLock($userId, $datetime){
        try{
            $checkCount = self::selectRaw('COUNT(USER_ID) as CNT')
            ->where('USER_ID', $userId)
            ->whereRaw("(UPDATE_DATE IS NULL OR UPDATE_DATE < '". $datetime. "')")
            ->lockForUpdate()
            ->first();
            
            return (isset($checkCount)) ? $checkCount->toArray()['CNT'] : 0;
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * 新規レコード登録
     */
    public static function createFunc($data)
    {
        try{
            $user = new MUserModel();
            return $user->fill($data)->save();
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * 既存レコード編集
     */
    public static function updateFunc($data)
    {
        try{
            $user = new MUserModel();
            return self::where($user->primaryKey, $data[$user->primaryKey])->update($data);
        }
        catch(Exception $e){
            throw $e;
        }
    }

    /**
     * レコード削除
     */
    public static function deleteFunc($data)
    {
        try{
            $user = new MUserModel();
            return self::where($user->primaryKey, $data[$user->primaryKey])->delete();
        }
        catch(Exception $e){
            throw $e;
        }
    }
}