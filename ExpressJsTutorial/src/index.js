/*
API
get - read 
post - create
put - update
delete - delete 
*/

const path = require('path');
const express = require('express');
const app = express();

// Relative to absolute path
// console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
    
// Builtin middleware to serve static files
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello World, from the Vruttik!!");
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
