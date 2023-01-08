const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'amol1629rathod@gmail.com',
        pass: 'mczoorjhoamtzxpu'
    }
});

let mailOptions1;

const sendMail = (userEmail) => {
    var mailOptions = {
        from: 'amol1629rathod@gmail.com',
        to: "makerofking18@gmail.com",
        subject: 'Sending Email using Node.js',
        text: `Hi Smartherd, thank you for your nice Node.js tutorials.
              I will donate 50$ for this course. Please send me payment options.`
        // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
    };

    mailOptions1 = mailOptions;
}

transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

module.exports = sendMail;