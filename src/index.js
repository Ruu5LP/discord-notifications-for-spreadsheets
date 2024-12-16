const WEBHOOK_URL = ""; // DiscordのWebhook URL
const TARGET_SPREADSHEET_ID = ""; // 対象のスプレッドシートのID

function sendDiscordNotification(message) {
    const payload = {
    // Discordに送信する内容
    content: message,
    };

    const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    };

    UrlFetchApp.fetch(WEBHOOK_URL, options);
}

function onEdit(e) {
    // シートを取得
    const sheet = e.source.getActiveSheet();
    const range = e.range;
    const value = range.getValue();
    const row = range.getRow();
    // 編集された列番号を取得
    const col = range.getColumn();

    // F列が変更されたときのみ更新する
    if (col === 6) {
    // E列（5列目）とF列（6列目）の値を取得
    const eColumnValue = sheet.getRange(row, 5).getValue(); 
    const fColumnValue = sheet.getRange(row, 6).getValue();

    // スプレッドシートのURLを取得
    const spreadsheetUrl = e.source.getUrl();
    // シート名
    const sheetName = sheet.getName();
    // シート名をリンクにする 
    const linkToSheet = `[『状況把握管理』](${spreadsheetUrl})`;

    // メッセージの構築
    const message = `スプレッドシート 　${linkToSheet} 　が更新されました。\n\`\`\`
        追加・及び変更した項目: ${eColumnValue}

        本文: ${fColumnValue}
        \`\`\``;

        // Discord通知の送信
        sendDiscordNotification(message);
    }
}
