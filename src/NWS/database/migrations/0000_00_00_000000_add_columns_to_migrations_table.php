<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

// ファイル名「0000_00_00_000000_add_columns_to_migrations_table.php」
// クラス名はファイル名をキャメルケースで「AddColumnsToMigrationsTable」
return new class extends Migration
{
    // 型一覧
    // increments('id') ... 「符号なしINT」を使用した自動増分ID（主キー）
    // binary('カラム名') ... バイナリデータカラム
    // boolean('カラム名') ... 真偽値カラム
    // char('カラム名', 長さ) ... 長さを指定する文字列カラム
    // date('カラム名') ... 日付カラム
    // time('カラム名') ... 時間カラム
    // dateTime(カラム名) ... 日時カラム
    // double('カラム名', 桁数, 小数点以下桁数) ... ○桁で小数点以下×桁の小数カラム
    // enum('カラム名', ['定数', '定数']) ... ENUMカラム
    // integer('カラム名') ... 数値データカラム
    // json('カラム名') ... JSONフィールドカラム
    // timestamp('カラム名') ... TIMESTAMPカラム
    // timestamps() ... created_atとupdate_atカラム
    // nullableTimestamps() ... NULL値を許す以外、timestamps()と同じ
    // string('カラム名') ... VARCHARカラム
    // string('カラム名', 長さ) ... 長さ指定のVARCHARカラム
    // text('カラム名') ... TEXTカラム

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * テーブルの作成
         * ※Modelの作成を忘れずに
         */
        // Schema::create('テーブル名', function (Blueprint $table) {
        //     // ↓ テーブルにコメントを付与
        //     $table->comment('コメント');
        //     $table->char('カラム１');
        //     $table->char('カラム２');
        //     // ↓ カラムにコメントを付与
        //     $table->char('カラム３')->comment("コメント");

        //     CustomMigrate::addRegUpd($table);
        //     // ↓ PKの設定
        //     CustomMigrate::setPrimary($table, ['カラム１', 'カラム２']);
        // });

        /**
         * カラムの追加
         */
        // Schema::table('テーブル名', function (Blueprint $table) {
        //     // ↓ 基本
        //     $table->char("カラム名");

        //     // ↓ null許可
        //     $table->char("カラム名")->nullable();

        //     // ↓ デフォルト値の設定
        //     $table->char("カラム名")->default("デフォルト値");
        // });

        /**
         * Seederの実行
         */
        // Artisan::call('db:seed', ['--class' => 'Seeder名']);
    }

    /**
     * Reverse the migrations.
     * upでした操作と逆を行う
     *
     * @return void
     */
    public function down()
    {
        // upでテーブルの作成した場合
        // Schema::dropIfExists('テーブル名');

        // upでカラムを追加した場合
        // Schema::table('テーブル名', function (Blueprint $table) {
        //     $table->dropColumn("カラム名");
        // });
    }
};
