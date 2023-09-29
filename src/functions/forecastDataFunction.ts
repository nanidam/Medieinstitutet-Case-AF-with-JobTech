import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";

export const findDeficiencyValues = (getData: ICurrentOccupationalForecast[], ssykToMatch: string) => {
  const data = getData.filter(
    (findMatch) => findMatch.ssyk === Number(ssykToMatch)
  );

  if (data.length > 0) {
    const findDeficiencyValue23 = data.find(
      (rightMatch) => rightMatch.ar === 23
    );
    const findDeficiencyValue26 = data.find(
      (rightMatch) => rightMatch.ar === 26
    );
    return { deficiencyValue2023: findDeficiencyValue23, deficiencyValue2026: findDeficiencyValue26 };
  }
  return { deficiencyValue2023: undefined, deficiencyValue2026: undefined };
};

export const checkDeficiencyValues = (deficiencyValue: number) => {
  if (deficiencyValue <= 2) {
    return { value: "400", text: "Ej brist" };
  } else if (deficiencyValue === 3 || deficiencyValue === 4) {
    return { value: "250", text: "I balans" };
  } else if (deficiencyValue >= 5) {
    return { value: "60", text: "Hög" };
  } else {
    return { value: "500", text: "Ej Tillgängligt" };
  }
};