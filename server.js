require("dotenv").config();
const { createServer } = require("http");
const { join } = require("path");
const { parse } = require("url");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    // handle GET request to /service-worker.js
    // for next-offline, PENDING, HAVENT SET IT UP YET
    if (pathname === "/service-worker.js") {
      const filePath = join(__dirname, ".next", pathname);
      app.serveStatic(req, res, filePath);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(process.env.PORT, () => {
    console.log(
      "[" +
        new Date().toLocaleString() +
        "] NextJs Boilerplate Started at PID " +
        process.pid +
        " on PORT " +
        process.env.PORT
    );
  });
});
