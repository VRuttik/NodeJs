//Note:-
/*
1. type nul > index.js - to create new file.
2. .clear - Alias for .break
3. .exit - exit the RZEPL
4. .load - Load JS from a file into the REPL session
5. .editor - Enter editor mode
6. .break - Sometimes you get stuck, this gets you out
7. .save Save all evaluated commands in this REPL session to a file
8. dir - all files show
9. node -v - show nodejs version
10. --Tab then fs
11. cd .. - go outside 
12. cd ./NodeJs/nodeCh/ - go inside the folder
13. node index.js - to run the file
 */

const fs = require('fs');

fs.mkdirSync("Vruttik"); 

fs.writeFileSync("Vruttik/bio.txt", "My name is Vruttik Moragha");

fs.appendFileSync("Vruttik/bio.txt", " and I am winner.");

const data = fs.readFileSync("Vruttik/bio.txt", 'utf8'); // Specify 'utf8' encoding
console.log(data);

fs.renameSync("Vruttik/bio.txt","Vruttik/myBio.txt");// to rename the file

fs.unlinkSync("Vruttik/myBio.txt");// to delete a file

fs.rmdirSync("Vruttik"); // to delete a folder
