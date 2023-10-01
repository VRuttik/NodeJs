
const fs = require('fs');

/*
fs.mkdir("thapa", (err) => {
console.log("Folder Created");
});
*/

/*
fs.writeFile("./thapa/bio.txt", "My name is Vruttik Moragha!", 
(err) => {console.log('Files Created!');
});
*/

/*
fs.appendFile("./thapa/bio.txt", "Stay Hard.!!", (err) => {
    console.log(" Files data appended.!!");
});
*/

/*
fs.readFile("./thapa/bio.txt", "utf-8", (err, data) => {
console.log(data); // If there is any error then pass err in console.log to see the error.
});
*/

/*
fs.rename("./thapa/bio.txt" , "./thapa/myBio.txt", (err) => {
 console.log("Rename Successfully.!!");
});
*/

/*
fs.unlink("./thapa/myBio.txt", (err) => {
    console.log("File Deleted");
});
*/

fs.rmdir("./thapa", (err) => {
    console.log("Folder Deleted.!!");
});