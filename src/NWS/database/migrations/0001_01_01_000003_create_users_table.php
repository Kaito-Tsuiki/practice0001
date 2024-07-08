<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Library\ExtensionFunc;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {

            $table->integer('user_id')->comment('ユーザーID');
            $table->char('employee_no', 5)->comment('社員番号:再雇用などの際に同一人物でも変わる可能性有り');
            $table->string('last_name', 20)->comment('姓');
            $table->string('last_name_kana', 50)->comment('姓(カナ)');
            $table->string('last_name_alphabetical', 50)->comment('姓(英字)');
            $table->string('first_name', 20)->comment('名');
            $table->string('first_name_kana', 50)->comment('名(カナ)');
            $table->string('first_name_alphabetical', 50)->comment('名(英字)');
            $table->datetime('birthday')->comment('生年月日');
            $table->string('password', 255)->comment('パスワード');
            $table->string('previous_password_1', 255)->comment('パスワード(1世代前)')->nullable();
            $table->string('previous_password_2', 255)->comment('パスワード(2世代前)')->nullable();
            $table->datetime('password_update_at')->comment('パスワード更新日時')->nullable();
            $table->char('user_role', 4)->comment('ユーザーロール');
            $table->boolean('is_deleted')->comment('削除フラグ')->default('FALSE');
            $table->datetime('register_at')->comment('登録日時');
            $table->integer('register_user')->comment('登録者');
            $table->datetime('update_at')->comment('更新日時');
            $table->integer('update_user')->comment('更新者');

            ExtensionFunc::setPrimary($table, ['user_id']);
        });

        ExtensionFunc::execSeed('UsersSeeder');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
