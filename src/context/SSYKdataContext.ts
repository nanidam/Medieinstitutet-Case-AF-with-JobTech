import { createContext } from "react";
import { ISSYKData } from "../models/ISsykData";

export const SSYKdataContext = createContext<ISSYKData>({
  title: "",
  variables: [],
});
