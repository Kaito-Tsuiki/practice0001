@extends('master')
@section('content')

<head>
    <link rel='stylesheet' type='text/css' href='css/common/login.css'>
    <title>ログイン</title>
</head>

<body>
    <div class='center-content-hori' style='width:500px; border: 1px solid gainsboro; margin-top:100px;'>
        <div class='center-content-hori' style='width:410px; margin-bottom:40px;'>
            <div class='easyui-panel' title='スキル管理システム' style='width:100%; max-width:410px; padding:30px 30px;'>
                <h3 style='width:400px; margin-left:65px;'>ログイン</h3>
                <form id='inputForm'>
                    <div style='margin-bottom:20px'>
                        <input id='userId' name='id' class='easyui-textbox' style='width:100%' prompt='userid' type='tel'
                            data-options='label:"社員番号:", required:true, validType:["length[0,5]","userIdCheck[0]"],validateOnCreate:false, validateOnBlur:true'>
                    </div>
                    <div style='margin-bottom:20px'>
                        <input id='password' name='password' class='easyui-passwordbox' style='width:100%' prompt='Password' iconWidth='28' type='tel'
                            data-options='label:"パスワード:", required:true, validType:"userIdCheck[0]", validateOnCreate:false, validateOnBlur:true'>
                    </div>
                </form>
                <!-- 各種ボタン -->
                <div class='center-content-hori flex' style="width: 220px">
                    <div>
                        <a href='javascript:void(0)' onclick='submitForm()'>
                            <button class='login-button' tabindex="-1">ログイン</button>
                        </a>
                    </div>
                    <div>
                        <a href='javascript:void(0)' onclick='clearForm()'>
                            <button class='clear-button' tabindex="-1">クリア</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script type='text/javascript' src='./js/common/login.js'></script>
</body>

@endsection