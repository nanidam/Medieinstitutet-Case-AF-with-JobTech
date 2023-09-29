import axios from "axios";
import {
  IGetSCBStatisticsSalary,
  IGetSCBStatisticsSalaryResponse,
} from "../models/IGetSCBStatisticsSalary";

// const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
const URL =
  "https://api.scb.se/OV0104/v1/doris/sv/ssd/START/AM/AM0110/AM0110A/LonYrkeRegion4A";

export const getSCBStatisticsSalary = async (ssyk: string) => {
  const REQUESTBODY: IGetSCBStatisticsSalary = {
    query: [
      {
        code: "Yrke2012",
        selection: {
          filter: "item",
          values: [ssyk],
        },
      },
      {
        code: "ContentsCode",
        selection: {
          filter: "item",
          values: ["000000BW"],
        },
      },
      {
        code: "Tid",
        selection: {
          filter: "item",
          values: ["2017", "2018", "2019", "2020", "2021", "2022"],
        },
      },
    ],
    response: {
      format: "json",
    },
  };
  try {
    const response = await axios.post<IGetSCBStatisticsSalaryResponse>(
      // `${PROXY_URL}${URL}`,
      `${URL}`,
      REQUESTBODY
    );
    return response.data.data;
  } catch (error) {
    console.error("Error", error);
  }
};
