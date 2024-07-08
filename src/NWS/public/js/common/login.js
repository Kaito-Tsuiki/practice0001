//ログインボタン押下時処理
function submitForm() {
    let subimitFlg = $('#inputForm').form('enableValidation').form('validate');

    if(subimitFlg){
        let loginId = $('#userId').textbox('getValue');
        let password = $('#password').passwordbox('getValue');

        submitData = {
            'id' : loginId,
            'password' : password,
            'datetime' : decideDatetimeMillisecond()
        };
        $.messager.progress({msg:loginLoadingMsg});

        console.log(submitData);

        fetch('api/login/loginFunc', makeFetchOption(submitData))
        .then(response => {
            if(!response.ok){
                throw new Error(`${response.statusText}(${response.status})`)
            }
            return response.json();
        })
        .then(data => {
            if(data){
                console.log(data)
                // window.location.href = 'menu';
            }
             //ログイン失敗時
            else{
                $.messager.alert({title:loginErrTitle, msg:loginErrMsg, icon:'warning', width:330}); 
            }  
        })
        .catch((error)=>{
            console.log('エラー');
            console.error(displayErrorMsg(sysErrTitle, error));
        })
        .finally(()=>{
            $.messager.progress('close');
        });
    }
}

//クリアボタン押下時処理
function clearForm() {
    $('#inputForm').form('clear');
    $('span').removeClass('textbox-invalid');
    $('input').removeClass('validatebox-invalid');
}

//バリデートルールの追加
$.extend($.fn.validatebox.defaults.rules, {
    /**
    * 半角英数(とアンダーバー)のみ許可
    */
    userIdCheck: {
        validator: function(value, param){
            let pattern = /^[a-zA-Z0-9_]*$/;
            param[0] = '「半角英数字」「アンダーバー(_)」<br>のみで入力してください';
            return (!value.match(/^ +?$/)) ? pattern.test(value) : false;
        },
        message: '{0}'
    },
});