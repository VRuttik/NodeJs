const fs = require("fs");

const bioData = {
    name: "Vruttik",
    age: 26,
    channel: "Tech With VR",
};

/*

// {"name":"Vruttik","age":26,"channel":"Tech With VR"}

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log(objData);

*/

/*
1: Convert to JSON => done
2: add to other file
3: read file
4. again convert back to js obj ori
5: console.log
*/

const jsonData = JSON.stringify(bioData);
fs.writeFile('json1.json', jsonData, (err) => {
console.log("done");
});

fs.readFile("json1.json", "utf-8", (err, data) => { 
    //console.log(data);
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});