var http = require("http");

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
  if (req.url == "/") {
    res.end("Welcome");
  } else if (req.url == "/welcome") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });
    res.end("Welcome to Dominos!");
  } else if (req.url == "/contactus") {
    res.writeHead(200, {
      "content-type": "text/json",
    });
    res.end(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com",
      })
    );
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
    });
    res.end("<h1>Page Not Found</h1>");
  }
}

httpServer.listen(8081, () => {
  console.log("Port started at the point 8081");
});
module.exports = httpServer;
