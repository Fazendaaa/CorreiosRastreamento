import { Controller, Request } from "correiosapi/types";
import { handleResponse } from "correiosapi/utils";

const GET: Request = (req, res) => {
  try {
    const { id } = res.params;

    handleResponse(res, { data: { message: "running nodejs api" } });
  } catch (error) {
    handleResponse(res, {
      status: 400,
      data: { message: (error as Error).message },
    });
  }
};

export const tracking: Controller = {
  GET,
};
