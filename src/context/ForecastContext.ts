import { createContext } from "react";
import { ICurrentOccupationalForecast } from "../models/ICurrentOccupationalForecast";


export const ForecastContext = createContext<ICurrentOccupationalForecast[]>([])