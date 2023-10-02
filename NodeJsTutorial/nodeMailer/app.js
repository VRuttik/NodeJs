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
