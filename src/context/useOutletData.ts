import { useContext } from "react";
import { OutletContext } from "../components/Layout";

export const useOutletData = () => {
  const context = useContext(OutletContext);

  if (!context) {
    throw new Error(
      "useOutletData must be used within an OutletContext.Provider"
    );
  }
  return context;
};
