const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '8b1c69b81eb4d5b6530b3f5f3d9ffd53-9776af14-32bac6e1',
        domain: 'sandbox373ab3b59af84dbfa621be9027978449.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'akoguitar@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });
}

module.exports = sendMail;