function doPost(e) {
    try {
        // Parse the form data
        var data = e.parameter;

        // Open the active spreadsheet and sheet
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

        // Append a new row with the form data
        sheet.appendRow([
            data.firstName,
            data.lastName,
            data.email,
            data.loanOfficer,
            data.coBorrower,
            data.eveningPhone,
            data.workPhone,
            data.contactPreference,
            data.creditRating,
            data.propertyAddress,
            data.City,
            data.state,
            data.zipCode,
            data.loanPurpose,
            data.propertyWillBe,
            data.estimatedValue,
        ]);

        // Send an email notification
        var subject = "Application Received Successfully";
        var body = `
    Dear ${data.firstName} ${data.lastName},

    Your application has been received successfully.

    Thank you for your submission!

    Best regards,
    The Team
    `;

        // Add the image URL for the congratulation image
        var htmlBody = `
    <p>${body.replace(/\n/g, '<br>')}</p>
    <img src="https://via.placeholder.com/300?text=Congratulations+or+Successful" alt="Congratulations Image" />
    `;

        // Use GmailApp to send the email
        GmailApp.sendEmail(data.email, subject, body, { htmlBody: htmlBody });

        // Return a success response
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
        Logger.log("Error: " + error.message);
        return ContentService.createTextOutput("Error").setMimeType(ContentService.MimeType.TEXT);
    }
}
