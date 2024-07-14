import { createServer } from "https";
import { parse } from "url";
import { loggerMiddleware } from "correiosapi/middlewares";

const PORT = process.env.PORT || 80;

createServer((req, res) => {
  const parsedURL = parse(req.url!, true);
  const { query, path } = parsedURL;
  const { method } = req;
  let handler = routes[path] && routes[path][method];

  if (!handler) {
  }
})
  .on("request", loggerMiddleware)
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
