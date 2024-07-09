/*
|--------------------------------------------------------------------------
| メッセージリスト
|--------------------------------------------------------------------------
|
| 表示するメッセージのテキストや、タイトルを管理します
| ・EayUIで使用する場合HTML内に要素を配置することになるため改行の場合は「\n」ではなく「<br>」を使用してください
| 　上記での使用以外は場合は適宜改行コードの使い分けをお願いします
| ・cfm = confirm
| ・msg = message
| ・alrt = alert
| ・err = error
| ・exec = execute
| ・fin = finish
| ・wip = work in progress
| ・sys = system
| ・mst = master
|
*/
let loginLoadingMsg = '<span class="loading-span">ログイン処理中です...</span>';
let loginErrMsg = '入力されたユーザ情報は存在しないか、パスワードに誤りがあります。';

//汎用
let title = 'トコフェロール収支管理システム';
let loadingMsg = '<span class="loading-span">データの処理中です...</span>';
let cfmTitle = '確認';
let loginErrTitle = 'ログインエラー';
let sysErrTitle = 'システムエラー';
let inputErrTitle = '入力エラー';
let cautionTitle = '注意';
let genReportWipTitle = '帳票作成中';
let updateAlrtMsg = '更新を行います。よろしいですか？';
let clearAlrtMsg = '画面をクリアします。よろしいですか？';
let deleteAlrtMsg = '削除を行います。よろしいですか？';
let createNewDataAlrtMsg = '新規入力を行います。よろしいですか？';
let exitAlrtMsg = 'データが変更されています。<br>終了してよろしいですか？'
let undefinedDataMsg = '該当データが存在しません';
let mstEditSuccessMsg = 'マスタの編集が完了しました';
let notEnteredErrMsg = 'を入力してください';
let cantEnteredErrMsg = 'を入力することはできません';
let notSelectedErrMsg = 'を選択してください';
let missInputErrMsg = 'が間違っています';
let selectedUndefinedErrMsg = 'が選択されていません';
let cfmMsg = 'を行ってよろしいですか？';
let finMsg = 'が終了しました';
let errMsg = 'でエラーが発生しました';
let mstInfoGetFailedErrMsg = 'マスタ情報の取得中にエラーが発生したため、操作が正しく終了しませんでした。';
let noUserExecAlrtMsg = '注意：使用中のユーザがいないか確認してから<br>実行してください。<br></br>';
let dontChangeItemMsg = '通常は変更しない項目です<br>変更を維持しますか？';
let alreadyDataChangedErrMsg =  '他のユーザによりデータが更新されています。<br>再度処理を行ってください';
let updateErrMsg = '更新処理でエラーが発生しました'
let outputCfmMsg = '出力を行います。<br>よろしいですか？';
let genReportWipMsg = '<span class="gen-report-span">帳票を作成しています...</span>';
let dataUpdateExistEndInfoMst = 'データが変更されています。<br>終了してよろしいですか？';
let notUpdateDataExist = '変更データはありません。';
let duplicateInputErrMsg = '既に同じキーが存在します。<br>別のキーを入力してください。';

//文字列・数値系
let hankakuNumericMsgDigit = '桁の半角数字で入力してください';
let hankakuNumericMsg = '半角数字を入力してください';
let hankakuAiphaNumericMsg = '半角数字または半角英字で入力してください';
let asciiMsg = '半角数字、半角英字または半角記号で入力してください';

//日時系
let startDateErrMsg = '終了日と同日もしくは終了日以前を指定してください';
let endDateErrMsg = '開始日と同日もしくは開始日以降を指定してください';
let dateValidMsg = '年月日は「yyyy/mm/dd」の形式で入力してください。';
let datetimeValidMsg = '年月日と時刻は「yyyy/mm/dd hh:mm:ss」<br>の形式で入力してください。';
let currentMonthErrMsg = 'は当月内の日付を入力してください';

//データ送信
let sendDataCfmMsg = 'データ送信を行ってよろしいですか？';
let sendByRuleDataCfmMsg = '条件指定のデータを送信します。<br>送信してよろしいですか？';
let resendPastDataCfmMsg = '過去のデータを再送信します。<br>送信してよろしいですか？';
