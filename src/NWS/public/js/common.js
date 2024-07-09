/*
|--------------------------------------------------------------------------
| 共通関数
|--------------------------------------------------------------------------
|
| 各ページ共通で使う可能性の高い関数や変数については個別のJSファイルではなく
| こちらに記述してください
|
*/

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

let filePath = './report/';

//ヘッダに当日の日付を入力する
$(function() {
    let element = document.getElementById('nowdate');
    if(element){
        if (Number(month) < 10) month = '0' + month;
        if (Number(day) < 10) day = '0' + day;
        $('#nowdate').val(`${year}/${month}/${day}`);
        element.innerHTML = `${year}/${month}/${day}`;
    }

    let targetElements = document.querySelectorAll('.func-button');
    Object.keys(targetElements).forEach( key =>{
        targetElements[key].parentNode.classList.add('button-a');
        targetElements[key].parentNode.parentNode.classList.add('button-margin');
    });

    targetElements = document.querySelectorAll('.login-button');
    Object.keys(targetElements).forEach( key =>{
        targetElements[key].parentNode.classList.add('button-a');
        targetElements[key].parentNode.parentNode.classList.add('button-margin');
    });

    targetElements = document.querySelectorAll('.menu-button');
    Object.keys(targetElements).forEach( key =>{
        targetElements[key].parentNode.classList.add('button-a');
        targetElements[key].parentNode.parentNode.classList.add('button-margin');
    });
})

//POST時のオプションを生成する
function makeFetchOption(data) {
    return {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        credentials: 'same-origin'
    }
}

//現在の日付を取得する
function decideDatetimeMillisecond(){
    let date = new Date();

    let result = date.getFullYear()
    + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '-' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2)
    + '.' + date.getMilliseconds();    

    return result;
}

//数値項目が空欄のとき代わりに0を入力する
function changeEmptyToZero(newValue, oldValue){
    if(newValue == ''){
        $(`#${this.id}`).numberbox('setValue', '0.00');
    }
}

//スローされたエラーメッセージを表示する
//戻り値のURLがlogin(セッションタイムアウト)の場合はメッセージの終了後ログイン画面へ遷移
function displayErrorMsg(title, error){
    if(String(error).indexOf('session') == -1){
        $.messager.alert(title, `${mstInfoGetFailedErrMsg}<br><br>${error}` ,'error');
        return `${mstInfoGetFailedErrMsg}\n\n${error}`;
    }
    else{
        let msg1 = 'セッションタイムアウトしました。';
        let msg2 = '再度ログインしてください';
        $.messager.alert(title, `${msg1}<br>${msg2}` ,'error',function(){
            window.location.href = 'login';
        });
        return `${msg1}\n${msg2}`;
    }
}

/**
 * メモCD項目を変更するときに確認ポップアップを表示する
 * @param {*メモCDの要素情報 [selectのID, 入力される値]} memoCd 
 * @param {*メモ実値の要素情報 [inputのID, 入力される値]} memoValue 
 */
function editMemoAlert(memoCd, memoValue){
    $.messager.confirm(cautionTitle, dontChangeItemMsg, function(r) {
        if (r) {
            $(memoCd[0]).combogrid('setValue', memoCd[1]);
            $(memoValue[0]).textbox('setValue', memoValue[1]);
        }
    }, 'question');
}

//年月日のフォーマッター(yyyy/mm/dd)
function ymdFormatter(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
}

//年月日のパーサー(yyyy/mm/dd)
function ymdParser(s) {
    if (!s) return new Date();
    let ss = (s.split('/'));
    let y = parseInt(ss[0], 10);
    let m = parseInt(ss[1], 10);
    let d = parseInt(ss[2], 10);
    if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
        return new Date(y, m - 1, d);
    } else {
        return new Date();
    }
}

//年月日-時刻のフォーマッターのフォーマッター(yyyy/mm/dd hh:mm:ss)
function ymdhmsFormatter(date) {
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let sec = date.getSeconds();

    let ymd = y + '/' + (m < 10 ? ('0' + m) : m) + '/' + (d < 10 ? ('0' + d) : d);
    let hms = (hh < 10 ? ('0' + hh) : hh) + ':' + (mm < 10 ? ('0' + mm) : mm) + ':' + (sec < 10 ? ('0' + sec) : sec);
    return (ymd + ' ' + hms);
}

//年月日-時刻のフォーマッターのパーサー(yyyy/mm/dd hh:mm:ss)
function ymdhmsParser(s) {
    if (!s) return new Date();
    let y, m, d, hh, mm, sec;
    if(s.indexOf(' ') !== -1 && s.indexOf('/') !== -1 && s.indexOf(':') !== -1){
        let ss = (s.split('/'));
        y = parseInt(ss[0], 10);
        m = parseInt(ss[1], 10);

        let sss = (ss[2].split(' '));
        d = parseInt(sss[0], 10);

        let ssss = (sss[1].split(':'));
        hh = parseInt(ssss[0], 10);
        mm = parseInt(ssss[1], 10);
        sec = parseInt(ssss[2], 10);
    }

    if (!isNaN(y) && !isNaN(m) && !isNaN(d) && !isNaN(hh) && !isNaN(mm) && !isNaN(sec)) {
        return new Date(y, m - 1, d, hh, mm, sec);
    } else {
        return new Date();
    }
}

//datagrid内にcombogridを置くことができるように拡張
$.extend($.fn.datagrid.defaults.editors, {
combogrid: {
    init: function(container, options) {                 
        let input = $('<input type="text" class="datagrid-editable-input">').appendTo(container);
        input.combogrid(options);
        return input;
    },
    destroy: function(target) {
        $(target).combogrid('destroy');
    },
    getValue: function(target) {
        return $(target).combogrid('getValue');
    },
    setValue: function(target, value) {
        $(target).combogrid('setValue', value);
    },
    resize: function(target, width) {
        $(target).combogrid('resize', width);
    }
}
});

/**
 * 各ダイアログの先頭要素と末尾要素とでフォーカスをループ
 * ※inert属性でTABコントロールを制御するようになったため、タブインデックスの付与は廃止
 * @param {*要素内で決定した任意のクラス名('.***')} cssSelector 
 * @param {*要素を含むウインドウのID('***')} windowId 
 */
function startEndFocusLoop(cssSelector, windowId){
    let targetElements = document.querySelectorAll(cssSelector);
    let lastIndex = targetElements.length - 1;
    let firstTargetParent = targetElements[0].parentNode.children;
    let type = '';
    for(let i=0; i<firstTargetParent.length; i++){
        (firstTargetParent[i].classList).forEach(className => {
            //先頭要素を判別
            switch(className){
                case 'easyui-combogrid':
                    type = 'combo';
                    break;
                case 'easyui-combobox':
                    type = 'combo';
                    break;
                case 'easyui-checkbox':
                    type = 'check';
                    break;
                case 'easyui-textbox':
                    type = 'text';
                    break;
                case 'easyui-numberbox':
                    type = 'text';
                    break;
                default :
                    break;
            }
        });
    }

    document.addEventListener('keydown', e => {
        if(e.key !== 'Tab'){
            return;
        }
        //呼び出したウインドウが非表示の場合は実行しない
        if(document.getElementById(windowId).parentNode.style.display != 'none'){
            let firstTargetElement;
            let targetLastIndex = firstTargetParent.length - 1;

            switch(type){
                case 'combo':
                    firstTargetElement = firstTargetParent[targetLastIndex].children[1];
                    break;
                case 'text':
                    firstTargetElement = firstTargetParent[targetLastIndex].children[0];
                    if(windowId == 'splitDialog'){
                        (firstTargetElement.classList).forEach(className => {
                            if(className == 'validatebox-disabled'){
                                firstTargetElement = targetElements[1].parentNode.children[2].children[0];
                            }
                        });
                    }
                    break;
                case 'check':
                    firstTargetElement = firstTargetParent[targetLastIndex].children[1];
                    break;
            }

            //[shift]+[tab]押下時に現在のターゲットが先頭の場合
            //※先頭要素がcombogridの場合、現在のターゲットがbodyに向くためこの条件になっています
            if(e.shiftKey && (e.target === firstTargetElement || e.target === document.body)){
                e.preventDefault();
                targetElements[lastIndex].focus();
            }
            //[tab]押下時に現在のターゲットが末尾の場合
            else if(!e.shiftKey && e.target === targetElements[lastIndex]){
                e.preventDefault();
                firstTargetElement.focus();
            }
            //先頭要素がcombogridの場合、現在のターゲットがbodyとなり
            //タブ移動時にフォーカスが先頭要素から外れないため実装
            if(e.target === document.body){
                firstTargetElement.parentNode.classList.remove('textbox-focused');
            }
        }
    });
};

/**
 * 指定クラスを持った要素にinert属性を付与
 * @param {*要素内で決定した任意のクラス名('.***')} cssSelector 
 */
function setInert(cssCelector){
    let targetElements = document.querySelectorAll(cssCelector)          
    targetElements.forEach(targetElement => {
        targetElement.inert = true;
    });
}

/**
 * 指定クラスを持った要素のinert属性を削除
 * ダイアログのクローズ後の実行を想定しているため、
 * 親画面全体のinertを削除後、親画面内の項目に対してsetInertを実施
 */
function releaseInert(){
    let masks = Array.from(document.getElementsByClassName('window-mask'));
    let flg = false;

    masks.forEach(mask => {
        if(mask.style.display == 'none'){
            flg = true;
        } 
    });
    if(flg){
        let targetElements = document.querySelectorAll('.inert')        
        targetElements.forEach(targetElement => {
            targetElement.inert = false;
        });
    }
    setInert('.inert-parent');
}

/**
 * ウィンドウを表示するのと同時に親画面にフィルターをかける
 */
function windowOpenFunc(windowId){
    //window要素を開いた際にページ最上部から展開
    $(windowId).window('open');
    $(windowId).window('moveTo', 'top');
    //inertクラスを持つ要素以下にすべてinert属性を与える
    let masks = Array.from(document.getElementsByClassName('window-mask'));
    masks.forEach(mask => {
        if(mask.style.display == 'block'){
            setInert('.inert');
        } 
    });
    //チェックボックス項目に対してスタイルを付与
    addCheckboxFocus();
}

/**
 * チェックボックス要素にフォーカス時にスタイルを与えられるようにする
 */
function addCheckboxFocus(){
    let checkboxValue = document.querySelectorAll('.checkbox-value');
    for(let i=0; i<checkboxValue.length; i++){
        checkboxValue[i].addEventListener('focus', () => {
            checkboxValue[i].parentElement.classList.add('checkbox-focused');
        });
        
        checkboxValue[i].addEventListener('blur', () => {
            checkboxValue[i].parentElement.classList.remove('checkbox-focused');
        });
    }
}

//画面クリア表示ウィンドウの共通化
function commonClearFunc(func){
    $.messager.confirm({
        title : cfmTitle, 
        msg : clearAlrtMsg, 
        fn : function(r) {
            if (r) {
                func();
            }
        },
        icon : 'question',
        width : 330,
    });
}

//window要素の初期配置を変更できるように要素を拡張
(function($){
    $.extend($.fn.window.methods, {
        moveTo: function(jq, param){
            return jq.each(function(){
                let win = $(this).window('window');
                let width = win.outerWidth();
                let height = win.outerHeight();
                let left = undefined;
                let top = undefined;
                if (param.indexOf('left') >= 0){
                    left = $(document).scrollLeft();
                }
                if (param.indexOf('right') >= 0){
                    left = $(window).outerWidth() - width + $(document).scrollLeft();
                }
                if (param.indexOf('top') >= 0){
                    top = $(document).scrollTop();
                }
                if (param.indexOf('bottom') >= 0){
                    top = $(window).outerHeight() - height + $(document).scrollTop();
                }
                $(this).window('move', {
                    left: left,
                    top: top
                });
            })
        }
    });
})(jQuery);

//グリッド内に行削除用チェックボックスを配置する
function incellCheckformatter (value, row, index) {
    let a;
    a = "<input id='checkboxInCell_" + index + "' ";
    a += "type='checkbox' ";
    a += "tabindex='-1' ";
    a += "onchange='incellCheckFunc(" + index + ", " + JSON.stringify(row) + ")'>";
    a += "</input>";
    return a;
}

//チェックボックス操作時処理
//各ページで変数newRowFlgを宣言してください(新規空白行がある場合はtrue、ない場合はfalse)
function incellCheckFunc(checkIndex, checkRowData){
    //行のID
    let rowId = document.getElementById("checkboxInCell_" + checkIndex).parentElement.parentElement.parentElement;

    //チェックオンされたとき配列に行要素を追加し行削除ボタンを活性化
    if(document.getElementById("checkboxInCell_" + checkIndex).checked){
        let gridData = $(gridId).datagrid('getRows');
        //最終行(新規データ行)がある場合とそうでない場合とで行数を調整
        let dataLength = (newRowFlg) ? gridData.length-1 : gridData.length;
        let lastRowCheck = (newRowFlg) ? JSON.stringify(gridData[dataLength]) !== JSON.stringify(checkRowData) : true
        //最終行(新規データ行)は削除を行わないためチェックする
        if(lastRowCheck){ 
            for(let i=0; i<dataLength; i++){
                if(JSON.stringify(checkRowData) === JSON.stringify(gridData[i])){
                    //削除行位置の取得
                    checkRows.push(gridData[i]);
                    $('#deleteRowButton').linkbutton('enable');
                    
                    break;
                }
            }

            rowId.style.background = 'rgb(255, 170, 150)';
        }
        else{
            document.getElementById("checkboxInCell_" + checkIndex).checked = false;
        }
    }
    //チェックオフされた場合配列から要素を削除し、配列の要素がなければ行削除ボタンを非活性化
    else{
        checkRows = checkRows.filter(function(checkRow){
            return JSON.stringify(checkRow) !==  JSON.stringify(checkRowData);
        });

        if(checkRows.length < 1){
            $('#deleteRowButton').linkbutton('disable');
        }

        rowId.style.background = null;
    }
}

//ツールバーの設定
let toolBar = [
    {
        id : 'deleteRowButton',
        text : '行削除',
        disabled : true,
        iconCls : 'icon-cancel',
        handler : function(){
            if(checkRows.length > 0){
                $.messager.confirm({
                    title : cfmTitle, 
                    msg : multiRowDeleteAlrtMsg, 
                    fn : function(r) {
                        if (r) { 
                            //各画面JSにて処理を記述
                            deleteRowFunction();
                            $('#deleteRowButton').linkbutton('disable');
                        }
                    },
                    icon : 'question',
                    width : 360,
                });
            }
            else{
                $.messager.alert(inputErrTitle,'1行以上選択してください', 'warning');
            }     
        }
    },
];

//グリッド内に行削除用チェックボックスを配置する
//各ページで変数newRowFlgを宣言してください(新規空白行がある場合はtrue、ない場合はfalse)
function incellCheckformatter2 (value, row, index) {
    let a;
    a = "<input id='checkboxInCell2_" + index + "' ";
    a += "type='checkbox' ";
    a += "tabindex='-1' ";
    a += "onchange='incellCheckFunc2(" + index + ", " + JSON.stringify(row) + ")'>";
    a += "</input>";
    return a;
}

//セルのスタイラー(入力不可項目のセルを緑色にする)
function cellStyler(value, row, index) {
    return 'background-color:rgb(197, 255, 163);';
}

//セルのスタイラー(セル内の数値が0以下のときに値の文字色を赤色にする)
function redCellStyler(value, row, index) {
    return (value <= 0) && 'color:red;';
}

//セルのスタイラー(文字色を青色にする)
function blueCellStyler(value, row, index) {
    return 'color:blue;';
}


/*
|--------------------------------------------------------------------------
| EasyUi-validateboxのルール追加
|--------------------------------------------------------------------------
|
| validateboxのもつバリデーションチェックのルールを追加します。
| 桁数のチェックなど汎用性の高いルールについてはこちらに追記し、
| そうでないルールについては機能ごとのJSファイルに追記するようお願いします。
|
*/

$.extend($.fn.validatebox.defaults.rules, {
    /**
    * yyyy/mm/ddの形式で入力しなかった場合にエラー
    */
    validDate: { 
        validator: function(value, param){ 
            let parseDate = ymdParser(value);
            let formatDate = ymdFormatter(parseDate);
            param[0] = dateValidMsg;

            return formatDate == value;
        }, 
        message: '{0}' 
    },
    /**
    * yyyy/mm/dd hh:mm:ssの形式で入力しなかった場合にエラー
    */
    validDatetime: { 
        validator: function(value, param){ 
            let parseDatetime = ymdhmsParser(value);
            let formatDatetime = ymdhmsFormatter(parseDatetime);
            param[0] = datetimeValidMsg;

            return formatDatetime == value;
        }, 
        message: '{0}' 
    },
    /**
    * 開始日>終了日のときにエラー
    * 引数：startのdateboxが持つid
    */
    endDateCheck: {
        validator: function(value, param){
            let start = ymdParser($(param[0]).datebox('getValue'));
            let end = ymdParser(value);
            param[1] = endDateErrMsg;

            return $(param[0]).datebox('getValue') ? end>=start : true;
        },
        message: '{1}'
    },
    /**
    * 開始日>終了日のときにエラー
    * 引数：endのdateboxが持つid
    */
    startDateCheck: {
        validator: function(value, param){
            let start = ymdParser(value);
            let end = ymdParser($(param[0]).datebox('getValue'));
            param[1] = startDateErrMsg;

            return $(param[0]).datebox('getValue') ? end>=start : true;
        },
        message: '{1}'
    },
    /**
    * 入力した年月日が指定の範囲外のときにエラー
    * 引数：指定範囲[0][1]メッセージに表示する項目[2]
    */
    currentMonthCheck: {
        validator: function(value, param){
            let current = ymdParser(value);
            let start = ymdParser(param[0]);
            let end = ymdParser(param[1]);
            param[3] = `${param[2]}${currentMonthErrMsg}`;

            return (current >= start && current <= end);
        },
        message: '{3}'
    },
    /**
    * 半角文字(半角カナを除く)のみを許可
    * ⇒ASCII文字かどうかを判断
    */
    asciiCheck: {
        validator: function(value, param){
            let pattern = /^[\x20-\x7e]*$/;
            param[0] = asciiMsg;
            return (!value.match(/^ +?$/)) ? pattern.test(value) : false;
        },
        message: '{0}'
    },
    /**
    * 半角英数のみを許可
    */
    hankakuAlphaNumericCheck: {
        validator: function(value, param){
            let pattern = /^[A-Za-z0-9]*$/;
            param[0] = hankakuAiphaNumericMsg;
            return (!value.match(/^ +?$/)) ? pattern.test(value) : false;
        },
        message: '{0}'
    },
    /**
    * 半角英数(とハイフン？)のみ許可
    * ドットも許可？
    */
    hankakuUpperAlphaNumericCheck: {
        validator: function(value, param){
            let pattern = /^[A-Z0-9-./]*$/;
            param[0] = '「半角数字」「半角英字(大文字)」<br>「ハイフン(-)」「ドット(.)」「スラッシュ(/)」のみで入力してください';
            return (!value.match(/^ +?$/)) ? pattern.test(value) : false;
        },
        message: '{0}'
    },
    /**
    * 半角数字のみを許可
    * ※数値入力項目に対してのバリデーションを検討する場合は、
    * まずnumberboxでの実装を優先的に検討するようにしてください。
    * (numberboxでは、そもそも数値以外が入力できないように設定されているため)
    * こちらは数字のみで構成されるID用のtextboxなどへの適用をお願いします
    */
    hankakuNumericCheck: {
        validator: function(value, param){
            let pattern = /^[0-9]*$/;
            param[0] = hankakuNumericMsg;
            return pattern.test(value);
        },
        message: '{0}'
    },
    /**
    * 0以上の入力のみを許可
    */
    zeroCheck: {
        validator: function(value, param){
            param[0] = recvshipKgZeroErrMsg;
            return value > 0;
        },
        message: '{0}'
    },
    /**
    * 特殊文字を全てを弾く
    */
    specialCheck: {
        validator: function(value, param){
            let pattern = /^[^&'`"<>]*$/g;
            param[0] = "次の文字は入力できません「&」「'」「`」「\"」「<」「>」";
            return pattern.test(value);
        },
        message: '{0}'
    },
    /**
    * シングルクォートを弾く
    */
    singleQuoteCheck: {
        validator: function(value, param){
            let pattern = /^[^']*$/g;
            param[0] = "「'」は入力できません";
            return pattern.test(value);
        },
        message: '{0}'
    },
});