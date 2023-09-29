import { ISSYKData } from "../models/ISsykData";

export const useSSYKDetails = (ssyk: string, ssykdata: ISSYKData) => {
  if (!ssyk || !ssykdata) {
    console.log("Value not found in the list");
    return;
  }

  const ssykDetailsList = ssykdata.variables[0].values;
  const index = ssykDetailsList.indexOf(ssyk);
  if (index !== -1) {
    const findIndexText = ssykdata.variables[0].valueTexts[index];
    return findIndexText;
  } else {
    console.log("Value not found in the list");
  }
};
