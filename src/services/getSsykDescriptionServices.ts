import axios from "axios";

const URLDescription =
  "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0208/AM0208Z/SSYKBeskrivning";

export const getSsykDescription = async () => {
  const config = {
    url: URLDescription,
    method: "GET",
  };

  const response = await axios(config);
  return response.data;
};
