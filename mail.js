require('dotenv').config()
const nodemailer = require("nodemailer");

// console.log("MAIL_USER ===>", process.env.MAIL_USER);
// console.log("MAIL_PASS ===>", process.env.MAIL_PASS);

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "9b8ea1f6cb169d",
        pass: "e41162d472ecf4"
    }
});

function sendMail(message) {
    return transport.sendMail(message)
}

module.exports = {
    sendMail
};