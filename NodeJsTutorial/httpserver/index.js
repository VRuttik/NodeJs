const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
   const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`, "utf-8");
   const objData = JSON.parse(data);

   if (req.url === "/") {
      res.end("Hello from the home side");
   } else if (req.url === "/about") {
      res.end("Hello from the About Us side");
   } else if (req.url === "/contact") {
      res.end("Hello from the Contact Us side");
   } else if (req.url === "/userapi") {
      res.writeHead(200, { "content-type": "application/json" });
         res.end(objData[[0].name]);   
   } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 error page. Page does not exist.</h1>");
   }
});

server.listen(8030, "127.0.0.1", () => {
   console.log("Listening on port 8030");
});







