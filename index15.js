// app.js

const express = require("express");
const app = express();
const PORT = 5000;

const sendMail = require("/workspaces/NodeJs/controllers/sendMail"); // Update the path to your sendMail controller file

app.get("/", (req, res) => {
    res.send("I am sending an email.");
});

app.get("/mail", sendMail);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is live on port no. ${PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();




// sendMail.js

const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

        // Create a transporter using your SMTP settings
        let transporter = await nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587, // Updated port to the default SMTP port (587 for TLS)
            secure: false, // Updated to false for TLS
            auth: {
                user: 'antwan.kuhlman70@ethereal.email',
                pass: 'zNGe7nUX4p9JSVCnAx'
            },
        });

        let info = await transporter.sendMail({
            from: '"Vruttik moragha 👻" <vruttik@gmail.com>',
            to: "vruttikmorgha@gmail.com, vruttik.moragha21@pccoepune.org",
            subject: "Hello Vruttik",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while sending the email." });
    }
};

module.exports = sendMail;
