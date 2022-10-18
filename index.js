const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // 쿼리스트링, 옵션인 마지막 슬래시응 없애고 소문자를 바꾸어서 url을 정규화 합니다.
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();

  switch (path) {
    case "":
      serveStaticFile(res, "/index.html", "text/html");
      break;
    
    case '/source/img/bg_dpimg.png':
      serveStaticFile(res, '/source/img/bg_dpimg.png', 'image/png');
      break;
    
    case '/source/vod/tekken8.mp4':
      serveStaticFile(res, '/source/vod/tekken8.mp4', 'video/mp4');
      break;
    
    case '/module/main.js':
      serveStaticFile(res, '/module/main.js', 'script/js');
      
    default:
      serveStaticFile(res, "/views/404.html", "text/html", 404);
      break;
  }
});

server.listen(port, () =>
  console.log(`server started on port ${port}; ` + " press Ctrl + C to terminate "));
