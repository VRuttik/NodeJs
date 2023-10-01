
const { Console } = require("console");
const os = require("os");

console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());// to see platform like linus or windows or other.
console.log(os.tmpdir());// To see the folder directory.
console.log(os.type());


/*
// To check free memory
const freeMemory = os.freemem();
//console.log(freeMemory); // it gives size in bytes
console.log(`${freeMemory/1024/1024/1024}`); // It gives size in Giga Bytes.

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`); // It gives size in Giga Bytes.(ctr + shift + Esc = to see the all details in Memory/ Task Manager in computer.)
*/