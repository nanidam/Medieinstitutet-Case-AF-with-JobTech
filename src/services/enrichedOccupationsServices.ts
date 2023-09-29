import axios from "axios";
import { IEnrichedOccupation } from "../models/IEnrichedOccupation";
import { IOccupation, IOccupation1 } from "../models/IOccupation";

const URL = "https://jobed-connect-api.jobtechdev.se/v1/enriched_occupations";

export const enrichedOccupation = async (search: IEnrichedOccupation) => {
  const config = {
    url: URL,
    method: "GET",
    params: {
      occupation_id: search.occupation_id,
      include_metadata: search.include_metadata || false,
    },
  };
  const response = await axios(config);
  return response.data;
};

export const getEnrichedOccupations = async (
  searchData: IOccupation1 | null
) => {
  if (searchData?.related_occupations.length) {
    const promises = searchData.related_occupations.map(async (occupation) => {
      return enrichedOccupation({
        occupation_id: occupation.id,
        include_metadata: true,
      });
    });
    const results: IOccupation[] = await Promise.all(promises);

    return results;
  }
};
