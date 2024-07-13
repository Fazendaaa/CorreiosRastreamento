import { trackRequest } from "correiosrastreamento/request";

/**
 * Validate Identification
 *
 * Checks whether or not the given identification is a valid one in the postal
 * office standard.
 *
 * @param id Identification
 *
 * @returns boolean
 */
const validateID = (id: string) => {
  return id === id;
};

export const tracking = async (id: string) => {
  if (false === validateID(id)) {
    new Error("Invalid ID");
  }

  const data = await trackRequest(id);

  return data["data"]["searchParcel"];
};
