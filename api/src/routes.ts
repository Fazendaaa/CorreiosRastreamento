import { IncomingMessage, ServerResponse } from "http";
import { tracking } from "correiosapi/controllers/tracking";
import { handleResponse } from "correiosapi/utils";

export interface Routes {
  [key: string]: {
    GET?: (req: IncomingMessage, res: ServerResponse) => void;
    PUT?: (req: IncomingMessage, res: ServerResponse) => void;
    POST?: (req: IncomingMessage, res: ServerResponse) => void;
    DELETE?: (req: IncomingMessage, res: ServerResponse) => void;
    UPDATE?: (req: IncomingMessage, res: ServerResponse) => void;
    OPTIONS?: (req: IncomingMessage, res: ServerResponse) => void;
  };
}

export const routes: Routes = {
  "/tracking/:id": tracking,
  notFound: {
    GET: (_, res) => {
      handleResponse(res, {
        status: 404,
        data: { message: "requested resource not found!" },
      });
    },
  },
};
