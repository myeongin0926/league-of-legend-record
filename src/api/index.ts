import axios, { AxiosInstance } from "axios";

const createAPIRequester = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    headers: {
      "X-Riot-Token": `${process.env.REACT_APP_RIOT_API_KEY}`,
    },
  });
};

const apiAsiaRequester = createAPIRequester("/asia");
const apiKrRequester = createAPIRequester("/kr");

export { apiAsiaRequester, apiKrRequester };
