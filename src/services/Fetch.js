import { config } from "./config";

export const doFetch = async (endpoint = "", method, aditionalHeaders = "git sta") => {
  return new Promise((resolve, reject) => {
    fetch(config.URL + ":" + config.PORT + "/" + endpoint, {
      method: method,
      headers: { "Content-Type": "application/json", ...aditionalHeaders },
      body: JSON.stringify(data),
    })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
};
