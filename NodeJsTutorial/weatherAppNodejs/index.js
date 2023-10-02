const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        // Replace 'YOUR_API_KEY' with your actual API key and 'YOUR_CITY' with the desired city
        const weatherAPIURL = `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a6eeeb35a51babb405321d4ed3435dc8`;

        requests(weatherAPIURL)
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk);
                const realTimeData = replaceVal(homeFile, objData);

                res.write(realTimeData);
                res.end();
            })
            .on('end', function (err) {
                if (err) {
                    console.log('connection closed due to errors', err);
                } else {
                    console.log('end');
                }
            });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is listening on port 8000");
});



