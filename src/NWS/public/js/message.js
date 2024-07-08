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
let bpcsSendLoadingMsg = '<span class="loading-span2">BPCS送信フラグの取得中です...</span>';
let bpcsCheckLoadingMsg = '<span class="loading-span2">BPCS品目マスタチェック中</span>';
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

//通常業務
let stanProcessAlrtMsg = '製造工程が標準の工程と異なりますが、よろしいですか？';
let recvshipKgZeroErrMsg = '油量Kgには0を入力することができません';
let alreadyManufacturedErrMsg = '製造完了しているため、製造中にはできません';
let notEnterdLotNoErrMsg = 'ロット管理する項目です。<br>ロット番号を入力してください';
let arrivalProcessDifferentCfmMsg = '入荷工程が標準の工程 と異なりますが、よろしいですか？';
let arrivalStocklocationDifferentCfmMsg = '入荷場所が標準の在庫場所と異なりますが、よろしいですか？';
let editedDataChangedErrMsg = '既に他のユーザに伝票データが変更された可能性があります。<br>更新してもよろしいですか？';
let cancelProcessAndResearchMsg = '処理をキャンセルします。再度検索し、内容を確認してください。';
let editedDataDeletedErrMsg = '既に他のユーザに伝票データが削除された可能性があります。<br>更新を行うことができません';
let DRecvShipChangedCheckErrMsg = '受払D変更チェック時にエラー';
let drumTotalErrMsg = 'ドラム別重量の合計と油量とが異なります';
let drumTotalErrMsg2 = 'ドラム別重量の合計と(現在庫-油量)とが異なります';
let lotMgmtErrMsg = 'ロット付番しない工程では、<br>ロット管理しない品目を選択してください';
let updateCancelByBPCSSendMsg = 'BPCS送信中のため更新をキャンセルしました';
let currentStockMinusAlrtMsg = '現在庫がマイナスの在庫がありました';
let notSelectstockErrMsg = '使用する在庫を指定してください';
let recvShipKgMinusErrMst = '油量は正の値を入力してください';
let confLotClearCfmMsg = '設定されているロットがクリアされます<br>よろしいですか？';
let rowDeleteAlrtMsg = 'この行を削除します。よろしいですか？<br>（削除を確定するには更新が必要です）';
let multiRowDeleteAlrtMsg = '選択中の行を削除します。よろしいですか？<br>（削除を確定するには更新が必要です）';
let editDataDeleteAlrtMsg = '編集中のデータを削除します。よろしいですか？<br>（削除を確定するには更新が必要です）';
let shipmentLotJudgeAlrtMsg = '出荷ロットが合格以外のため、出荷できません。<br>出荷の油量を0にして出荷を取り消してください';


//分割
let oil0InputErrMsg = '油量には0を入力することはできません';
let splitOil0InputErrMsg = '分割油量には0を入力することはできません';
let splitOilUnderOriginInputErrMsg = '分割油量には分割元油量未満の値を入力してください';
let splitCount0InputErrMsg = '分割数には0を入力することはできません';
let splitCountOver100InputErrMsg = '分割後の行数が100行以上になるため分割できません';
let trySplitErrMsg = '分割された行は分割できません';
let receiptDifferentStanCfmMsg = '製造品目の標準入荷元が標準の工程と異なりますが、よろしいですか？';

//データ送信
let sendDataCfmMsg = 'データ送信を行ってよろしいですか？';
let sendByRuleDataCfmMsg = '条件指定のデータを送信します。<br>送信してよろしいですか？';
let resendPastDataCfmMsg = '過去のデータを再送信します。<br>送信してよろしいですか？';

//月次業務
let receiveTestResultDataCfmMsg = '試験結果データ受信を行ってよろしいですか？';
let reReceivePastDataCfmMsg = '過去のデータを再受信します。<br>受信してよろしいですか？';
let costingBPCSCfmMsg = 'BPCS原価設定を行います。<br>よろしいですか？';
let costingBPCSFinMsg = 'BPCS原価設定が終了しました';
let outputCfmMsg = '出力を行います。<br>よろしいですか？';
let sendCoreDataWipMsg = '<span class="send-core-data-span">基幹データ送信中です…</span>';
let updateMonthlyWipMsg = '<span class="update-monthly-span">月次更新中です…</span>';
let genReportWipMsg = '<span class="gen-report-span">帳票を作成しています...</span>';
let genDataForOutputReportWipMsg = '<div class="gen-data-for-output-report-span">帳票出力用データを<br>作成しています...</div>';
let manufacuturingDataExistErrMsg = '製造中のデータがあるため月次更新を行う事はできません。<br>製造中のデータを製造完了にしてください';
let sendCoreDataErrMsg = '基幹データ送信処理でエラーが発生しました';
let sendCoreDataImpossibleErrMsg = '現在基幹データ送信処理を行う事ができません';
let updateMonthlyOtherUserUsedErrMsg = '現在使用中のユーザがいるため月次更新を行う事はできません';
let updateMonthlyBPCSprocessingErrMsg = '現在BPCS送信処理中のため月次更新を行う事はできません';
let updateMonthlyErrMsg = '月次更新処理でエラーが発生しました';

//保守業務
let oilOverCurrentStockErrMsg = '油量には現在庫以下の値を入力してください';
let bpcsValidMsgY = 'BPCS品目送信有無区分で「する」を選択した場合は必須入力です';
let bpcsValidMsgN = 'BPCS品目送信有無区分で「しない」を選択した場合は<br>';
let undefinedProductCdMsg = '指定の品目コードを持つ品目が存在しないため、削除を行えません。';
let undefinedPrescriptionCdMsg = '指定の処方コードを持つ処方が存在しないため、削除を行えません。';
let undefinedUserIdMsg = '指定のユーザIDを持つデータが存在しないため、削除を行えません。';
let sameMfgProductErrMsg = '既に同じ製造品目が存在します。<br>別の製造品目を入力してください';
let sameUsedProductErrMsg = '既に同じ使用品目が存在します。<br>別の使用品目を入力してください';
let receiptDifferentCfmMsg = '製造品目の標準入荷元が製造工程と異なりますが、よろしいですか？';
let shipmentDifferentCfmMsg = '使用品目の標準出荷先が製造工程と異なりますが、よろしいですか？';
let lotMngChangeErrMsg = '在庫にロット未設定のデータが存在するため、ロット管理区分を変更することができません';
let existDataToLogicalaDeleteErrMsg = 'コードを使用しているデータが存在するため、論理削除できません';
let cantGetErrorRangeErrMsg = '管理Mの警告誤差範囲が取得できませんでした';
let totalDifferrentErrMsg = '製造量の合計と使用量の合計に誤差があります';
let dataUpdateExistEndInfoMst = 'データが変更されています。<br>終了してよろしいですか？';
let notDatakbnErrMsg = 'データ区分を入力してください';
let notUpdateDataExist = '変更データはありません。';
let duplicateInputErrMsg = '既に同じキーが存在します。<br>別のキーを入力してください。';
