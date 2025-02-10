// Create web server and listen on port 3000
// The server will respond to HTTP GET requests with the file comments.json

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;

  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(data);
    return res.end();
  });
}).listen(3000);

// To test this server, run it and visit http://localhost:3000/comments.json in your browser.
// This will return the contents of the comments.json file.
// If you visit http://localhost:3000/does_not_exist.json, the server will return a 404 error.
