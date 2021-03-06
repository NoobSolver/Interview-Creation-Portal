const nodemailer = require('nodemailer');

var emailService = {};


emailService.rawData = function(emailsArr, start_time, end_time) {
    var mailOptions = {
        from: 'mathuranant123@gmail.com',
        to: emailsArr,
        subject: 'Interview Scheduled!',
        text: "Your interview is scheduled from " + start_time.toString() + " to " + end_time.toString(),
    };
    main(mailOptions).catch(console.error);
}

async function main(mailOptions) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'gauravmathur',
            pass: 'mathur_gaurav',
        },
    });

    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
}
module.exports = emailService;