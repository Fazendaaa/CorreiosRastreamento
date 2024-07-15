import { tracking } from "correiosapi/controllers/tracking";
import { handleResponse } from "correiosapi/utils";
import { Routes } from "correiosapi/types";

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
