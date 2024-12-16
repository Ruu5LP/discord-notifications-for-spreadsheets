# discord-notifications-for-spreadsheets
Sample for notifying Discord when editing a spreadsheet

# Description
This script sends a notification to a Discord channel when specific cells in a Google Sheets document are edited. The script monitors changes made to column F of the sheet. If a change is detected in column F, it retrieves the corresponding values from columns E and F, constructs a message, and sends it to a designated Discord webhook.

# Workflow
1. **onEdit Trigger**: The function onEdit is triggered whenever any cell in the sheet is edited.
2. **Target Column (F)**: The script checks if the edited column is column F (the 6th column).
3. **Data Retrieval**: If the edited column is F, the script retrieves the values from columns E and F of the same row.
4. **Message Construction**: A formatted message is created that includes the values from columns E and F, as well as a link to the sheet.
5. **Discord Notification**: The constructed message is then sent to a specified Discord webhook URL using the sendDiscordNotification function.

# Configuration
- **WEBHOOK_URL**: Set this variable to the Discord webhook URL where the notification will be sent.
- **TARGET_SPREADSHEET_ID**: Set this variable to the ID of the target Google Sheets document (if needed for future use).

# Usage
- Ensure the script is attached to a Google Sheets document.
- The script will automatically trigger whenever an edit is made in the sheet.
- The webhook URL must be set correctly to send notifications to the desired Discord channel.

# Customization
This script is provided as a sample, so feel free to modify and customize it as needed to fit your specific requirements!
