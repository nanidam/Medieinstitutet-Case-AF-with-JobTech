import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/ForecastReducer";

export const ForecastDispatchContext = createContext<Dispatch<IAction>>(() => { return; })