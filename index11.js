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

/*
[
    {
        "id": 1,
        "name": "User 1",
        "username": "username1",
        "email": "user1@example.com",
        "address": {
            "street": "Street 1",
            "suite": "Suite 1",
            "city": "City 1",
            "zipcode": "Zipcode 1",
            "geo": {
                "lat": 42.12345,
                "lng": -71.54321
            }
        },
        "phone": "123-456-7891",
        "website": "www.user1.com",
        "company": {
            "name": "Company 1",
            "catchPhrase": "CatchPhrase 1",
            "bs": "BS 1"
        }
    },
    {
        "id": 2,
        "name": "User 2",
        "username": "username2",
        "email": "user2@example.com",
        "address": {
            "street": "Street 2",
            "suite": "Suite 2",
            "city": "City 2",
            "zipcode": "Zipcode 2",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7892",
        "website": "www.user2.com",
        "company": {
            "name": "Company 2",
            "catchPhrase": "CatchPhrase 2",
            "bs": "BS 2"
        }
    },
    {
        "id": 3,
        "name": "User 3",
        "username": "username3",
        "email": "user3@example.com",
        "address": {
            "street": "Street 3",
            "suite": "Suite 3",
            "city": "City 3",
            "zipcode": "Zipcode 3",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7893",
        "website": "www.user3.com",
        "company": {
            "name": "Company 3",
            "catchPhrase": "CatchPhrase 3",
            "bs": "BS 3"
        }
    },
    {
        "id": 4,
        "name": "User 4",
        "username": "username4",
        "email": "user4@example.com",
        "address": {
            "street": "Street 4",
            "suite": "Suite 4",
            "city": "City 4",
            "zipcode": "Zipcode 4",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7894",
        "website": "www.user4.com",
        "company": {
            "name": "Company 4",
            "catchPhrase": "CatchPhrase 4",
            "bs": "BS 4"
        }
    },
    {
        "id": 5,
        "name": "User 5",
        "username": "username5",
        "email": "user5@example.com",
        "address": {
            "street": "Street 5",
            "suite": "Suite 5",
            "city": "City 5",
            "zipcode": "Zipcode 5",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7895",
        "website": "www.user5.com",
        "company": {
            "name": "Company 5",
            "catchPhrase": "CatchPhrase 5",
            "bs": "BS 5"
        }
    },
    {
        "id": 6,
        "name": "User 6",
        "username": "username6",
        "email": "user6@example.com",
        "address": {
            "street": "Street 6",
            "suite": "Suite 6",
            "city": "City 6",
            "zipcode": "Zipcode 6",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7896",
        "website": "www.user6.com",
        "company": {
            "name": "Company 6",
            "catchPhrase": "CatchPhrase 6",
            "bs": "BS 6"
        }
    },
    {
        "id": 7,
        "name": "User 7",
        "username": "username7",
        "email": "user7@example.com",
        "address": {
            "street": "Street 7",
            "suite": "Suite 7",
            "city": "City 7",
            "zipcode": "Zipcode 7",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7897",
        "website": "www.user7.com",
        "company": {
            "name": "Company 7",
            "catchPhrase": "CatchPhrase 7",
            "bs": "BS 7"
        }
    },
    {
        "id": 8,
        "name": "User 8",
        "username": "username8",
        "email": "user8@example.com",
        "address": {
            "street": "Street 8",
            "suite": "Suite 8",
            "city": "City 8",
            "zipcode": "Zipcode 8",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7898",
        "website": "www.user8.com",
        "company": {
            "name": "Company 8",
            "catchPhrase": "CatchPhrase 8",
            "bs": "BS 8"
        }
    },
    {
        "id": 9,
        "name": "User 9",
        "username": "username9",
        "email": "user9@example.com",
        "address": {
            "street": "Street 9",
            "suite": "Suite 9",
            "city": "City 9",
            "zipcode": "Zipcode 9",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7899",
        "website": "www.user9.com",
        "company": {
            "name": "Company 9",
            "catchPhrase": "CatchPhrase 9",
            "bs": "BS 9"
        }
    },
    {
        "id": 10,
        "name": "User 10",
        "username": "username10",
        "email": "user10@example.com",
        "address": {
            "street": "Street 10",
            "suite": "Suite 10",
            "city": "City 10",
            "zipcode": "Zipcode 10",
            "geo": {
                "lat": 41.98765,
                "lng": -71.87654
            }
        },
        "phone": "123-456-7810",
        "website": "www.user10.com",
        "company": {
            "name": "Company 10",
            "catchPhrase": "CatchPhrase 10",
            "bs": "BS 10"
        }
    }
]
*/
