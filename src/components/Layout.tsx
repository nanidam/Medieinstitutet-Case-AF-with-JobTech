import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { createContext, useState } from "react";
import { IOccupation1 } from "../models/IOccupation";
import { IEducations } from "../models/IEducations";

interface OutletContextProps {
  searchData: IOccupation1 | null;
  setSearchData: React.Dispatch<React.SetStateAction<IOccupation1 | null>>;
  searchEduData: IEducations | null;
  setSearchEduData: React.Dispatch<React.SetStateAction<IEducations | null>>;
}

export const OutletContext = createContext<OutletContextProps | undefined>(
  undefined
);

export const Layout = () => {
  const [searchData, setSearchData] = useState<IOccupation1 | null>(null);
  const [searchEduData, setSearchEduData] = useState<IEducations | null>(null);

  return (
    <>
      <Header></Header>
      <main>
        <OutletContext.Provider value={{ searchData, setSearchData, searchEduData, setSearchEduData }}>
          <Outlet></Outlet>
        </OutletContext.Provider>
      </main>
      <Footer></Footer>
    </>
  );
};
