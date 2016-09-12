var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    host: 'mail.togle.cz',
    tls: {rejectUnauthorized: false},
    auth: {
        user: 'noreply@gingermania.sk',
        pass: 'l9PC9509T'
    }
});

exports.sendMail = function (mailOptions, cb) {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return cb && cb(error);
        } else {
            console.log('Message sent: ' + info.response, 'to:', info.envelope.to);
            return cb && cb();
        }
    });
};