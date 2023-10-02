const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.write(`<h1>Welcome to my home page</h1>`);
    res.write(`<h1>Welcome to my home page again.!!</h1>`);
    res.send();

});

app.get("/about", (req, res) => {
    res.status(200).send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page");
});

/*
app.get("/temp", (req, res) => {
    res.send([{
        id: 1,
        name: "Vruttik",
    },
    {
        id: 2,
        name: "Ruttik",
    },
    {
        id: 3,
        name: "Vihan"
    }
]);
});
*/

app.get("/temp", (req, res) => {
    res.json([{
        id: 1,
        name: "Vruttik",
    },
    {
        id: 2,
        name: "Ruttik",
    },
    {
        id: 3,
        name: "Vihan"
    }
]);
});

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
});