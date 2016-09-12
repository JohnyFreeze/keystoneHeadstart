var mailFrom = 'Togle <info@togle.cz>'; //todo - set


var moment = require('moment');


exports.thanks = function (conf) {
    return {
        from: mailFrom, // sender address
        to: conf.to, // list of receivers
        subject: 'Togle',
        html: '<p>Hello,</p>' +
        '<p>Thank you.</p>' +
        '<p>Have a a nice day, Togle</p>'
    };
};

