const path = require("path");

console.log(path.dirname('E:/NodeJs/PathModule/path.js'));// To see directory name.
console.log(path.extname('E:/NodeJs/PathModule/path.js'));// To see file extension. ( here is = .js)
console.log(path.basename('E:/NodeJs/PathModule/path.js'));// To see file name. (Here is = path.js)

//console.log(path.parse("E:/NodeJs/PathModule/path.js"));// To see root, dir, base, file name.

const myPath = path.parse("E:/NodeJs/PathModule/path.js");
console.log(myPath.name);// Just change what yu want. replace name with other like root, dir.