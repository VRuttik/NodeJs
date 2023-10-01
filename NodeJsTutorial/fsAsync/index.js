
const fs = require("fs");

/*
fs.writeFile('read.txt', "Today is a awesome day :)", (err) =>{
    console.log("file is created");
    console.log(err);
});
*/

/*
    fs.appendFile('read.txt', ' Plz like and share and subs my youtub channel.!!', (err) => {
    console.log('task completed');
    });
    */

    fs.readFile('read.txt','UTF-8', (err, data) => {
        console.log(data);
    });