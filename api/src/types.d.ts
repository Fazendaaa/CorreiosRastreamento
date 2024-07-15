import { IncomingMessage, ServerResponse } from "http";

export type Methods = "GET" | "POST" | "PUT" | "DELETE" | "UPDATE" | "OPTIONS";

export type Request = (req: IncomingMessage, res: ServerResponse) => void;

export interface Controller {
  GET?: Request;
  PUT?: Request;
  POST?: Request;
  DELETE?: Request;
  UPDATE?: Request;
  OPTIONS?: Request;
}

export interface Routes {
  [key: string]: Controller;
}
