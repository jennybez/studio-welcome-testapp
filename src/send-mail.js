
const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'daniladiese@gmail.com',
        pass: 'oksaP16012001'
    }
});
let mailContent={
    from: 'Automated generating file <daniladiese@gmail.com>',
    to: 'Homm studio <jenny13.2014@gmail.ru>',
    subject: 'First Node.js email',
    text: 'Hi,This is a test mail sent using Nodemailer',
    html: '<h1>You can send html formatted content using Nodemailer with attachments</h1>',
    attachments: [
        {
            filename: this.surveyResultPDF,
            path: __dirname + '/surveyResult.pdf'
        }
    ]
};
transporter.sendMail(mailContent);
