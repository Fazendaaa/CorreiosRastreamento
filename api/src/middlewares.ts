export const loggerMiddleware = (req: Request, _: Response) => {
  console.log(`${req.method} ${req.url}`);
};
