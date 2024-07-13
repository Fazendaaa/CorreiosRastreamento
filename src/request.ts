import { request } from "https";

interface SearchParcelData {
  searchParcel: {
    id: string;
    needResync: boolean;
    lastStatus: string;
    source: string;
    externalShipmentId: string;
    createdAt: string;
    updatedAt: string;
    lastSyncTracker: string;
    nextSyncTracker: string;
    onQueue: boolean;
    trackingOriginalEvent: string;
    trackingOriginalRequest: string;
    pudoOriginalEvent: string;
    pudoOriginalRequest: string;
  };
}

interface SearchParcel {
  data: SearchParcelData;
}

export const trackRequest = (id: string): Promise<SearchParcel> => {
  const query = `
    mutation SearchParcel {
      searchParcel(tracker: { trackingCode: "${id}", type: correios }) {
        id
        needResync
        lastStatus
        source
        externalShipmentId
        createdAt
        updatedAt
        lastSyncTracker
        nextSyncTracker
        onQueue
        trackingOriginalEvent
        trackingOriginalRequest
        pudoOriginalEvent
        pudoOriginalRequest
      }
    }
  `;
  const data = JSON.stringify({ query });
  const options = {
    hostname: process.env.API ?? "",
    port: 443,
    path: "/graphql",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  return new Promise((resolve, reject) => {
    const req = request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        resolve(JSON.parse(data));
      });

      res.on("error", (err) => {
        reject(err);
      });
    });

    req.write(data);
    req.end();
  });
};
