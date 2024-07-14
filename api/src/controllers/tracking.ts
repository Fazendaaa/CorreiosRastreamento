import { Routes } from "correiosapi/routes";

export const tracking: Routes = {
  GET: (_, res) = {
    response(res, { data: { message: "running nodejs api" } });
  }
};
