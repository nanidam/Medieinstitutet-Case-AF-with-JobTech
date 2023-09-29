import { Dispatch, createContext } from "react";
import { IAction } from "../reducers/SSYKoccupationdescriptionReducer";


export const SSYKdataDispatchContext = createContext<Dispatch<IAction>>(() => { return; })