import { createServer } from "https";
import { parse } from "url";
import { loggerMiddleware } from "correiosapi/middlewares";
import { routes } from "correiosapi/routes";
import { Methods, Request } from "correiosapi/types";

const PORT = process.env.PORT || 80;

createServer((req, res) => {
  const parsedURL = parse(req.url!, true);
  const { query, path } = parsedURL;
  const { method } = req;
  const options =
    routes[path as string] && routes[path as string][method as Methods];
  let handler: Request = routes["notFound"]["GET"] as Request;

  if (!options) {
    const routeKeys = Object.keys(routes).filter((route) =>
      route.includes(":")
    );
    const matchedKey = routeKeys.find((route) => {
      const regex = new RegExp(`^${route.replace(/:[^/]+/g, "([^/]+)")}$`);
      return regex.test(path as string);
    });

    if (matchedKey) {
      const regex = new RegExp(`^${matchedKey.replace(/:[^/]+/g, "([^/]+)")}$`);
      const dynamicParams = (
        regex.exec(path as string) as RegExpExecArray
      ).slice(1);
      const dynamicHandler = routes[matchedKey][method as Methods];
      const paramKeys = (matchedKey.match(/:[^/]+/g) as string[]).map((key) =>
        key.substring(1)
      );
      const params = dynamicParams.reduce(
        (acc, val, i) => ({ ...acc, [paramKeys[i]]: val }),
        {}
      );

      // set params in req
      // req.params = params;

      handler = dynamicHandler as Request;
    }
  }

  // set query string in req
  // req.query = {};

  for (const key in query) {
    req.query[key] = query[key];
  }

  handler(req, res);
})
  .on("request", loggerMiddleware)
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
