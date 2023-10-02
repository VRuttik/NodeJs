//Note:-
/*
1. type nul > index.js - to create new file.
2. .clear - Alias for .break
3. exit - exit the RZEPL
4. .load - Load JS from a file into the REPL session
5. .editor - Enter editor mode
6..break - Sometimes you get stuck, this gets you out
7. .save Save all evaluated commands in this REPL session to a file
8. dir - all files show
9. node -v - show nodejs version
10. --Tab then fs
11. cd .. - go outside 
12. cd ./NodeJs/nodeCh/ - go inside the folder

 */


const fs = require("fs");
//creating a new file
//fs.writeFileSync("read.txt", "Welcome to my channel");
fs.appendFileSync("read.txt", " How are you? I am fine.node Thank You :) ");

//const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);

//org_data = buf_data.toString();
//console.log(org_data);

// to rename the file
//fs.renameSync("read.txt", "readwrite.txt");