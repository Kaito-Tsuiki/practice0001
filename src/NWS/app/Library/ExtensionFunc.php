<?php

namespace App\Library;

use Exception;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

/**
 * 各PHPに使用する拡張機能を管理します
 */
class ExtensionFunc{
    /**
    * PrimaryKeyを作成
    *
    * @param Blueprint  $table
    * @param array      $primaries
    * @return void
    */
    public static function setPrimary(Blueprint $table, array $primaries){
        $table->primary($primaries, "PK_".$table->getTable());
    }

    /**
    * Seederの実行
    *
    * @param string $className
    * @return void
    */
    public static function execSeed(string $className){
        if(file_exists("/var/www/NWS/database/seeders/{$className}.php")){
            Artisan::call('db:seed', ['--class' => $className]);
        }else{
            echo "指定されたSeederが存在しません：{$className}\n";
        }
    }

    /**
     * Add regist and update timestamps and user_id to the table.
     *
     * @param  Blueprint    $table
     * @param  bool         $requireTimestamp
     * @param  bool         $autoTimestamp
     * @return void
     */
    public static function addRegUpd(Blueprint $table, bool $requireTimestamp = false, bool $autoTimestamp = false)
    {
        // 登録日時
        if($requireTimestamp && $autoTimestamp){
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment("登録日時");
        }else if($requireTimestamp){
            $table->timestamp('created_at')->comment("登録日時");
        }else if($autoTimestamp){
            $table->timestamp('created_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP'))->comment("登録日時");
        }else{
            $table->timestamp('created_at')->nullable()->comment("登録日時");
        }
        // 登録者
        $table->char('created_user', 6)->nullable()->comment("登録者");

        // 更新日時
        if($requireTimestamp && $autoTimestamp){
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'))->comment("更新日時");
        }else if($requireTimestamp){
            $table->timestamp('updated_at')->comment("更新日時");
        }else if($autoTimestamp){
            $table->timestamp('updated_at')->nullable()->default(DB::raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'))->comment("更新日時");
        }else{
            $table->timestamp('updated_at')->nullable()->comment("更新日時");
        }
        // 更新者
        $table->char('updated_user', 6)->nullable()->comment("更新者");
    }
}