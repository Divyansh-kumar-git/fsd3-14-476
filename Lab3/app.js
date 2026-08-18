import http from "http";

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h2>Welcome to Serverside</h2>");
});

server.listen(5000, () => {
    console.log("Server is running");
});