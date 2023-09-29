import { ISSYKData } from "../models/ISsykData";

export interface IAction {
  type: string;
  payload: string;
}

export const SSYKoccupationdescriptionReducer = (matchingText: ISSYKData, action: IAction): ISSYKData => {
  if (action.type === "GOTDATA") {
    return JSON.parse(action.payload);
  }

  return matchingText;
}