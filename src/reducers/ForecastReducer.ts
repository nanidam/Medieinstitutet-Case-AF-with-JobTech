import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";

export interface IAction {
  type: string;
  payload: string;
}

export const ForecastReducer = (forecastdata: ICurrentOccupationalForecast[], action: IAction): ICurrentOccupationalForecast[] => {
  if (action.type === "GOT_DATA") {
    return JSON.parse(action.payload);
  }
  return forecastdata;
}