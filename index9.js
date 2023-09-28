const http = require("http");

const server = http.createServer((req, res) => {
   // console.log(req.url);

   if (req.url == "/") {
      res.end("Hello from the home sides");
   } else if (req.url == "/about") {
      res.end("Hello from the AboutUs sides");
   } else if (req.url == "/contact") {
      res.end("Hello from the ContactUs sides");
   } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 error page. Page does not exist.</h1>");
   }
});

server.listen(8000, "127.0.0.1", () => {
   console.log("Listening on port 8000");
});
