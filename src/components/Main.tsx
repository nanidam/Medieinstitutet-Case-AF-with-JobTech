import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { MainFlex } from "../style/Wrappers";
import { ISearchByText } from "../models/ISearchByText";
import { matchByText } from "../services/matchByTextServices";
import { useState } from "react";
import SearchResultsPlaceholder from "./SearchResultsPlaceholder";
import { useOutletData } from "../context/useOutletData";

export default function Main() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { searchData, setSearchData } = useOutletData();

  const getWorkData = async (search: ISearchByText) => {
    // const loaderDelay = 1000;

    const data = await matchByText(search);
    // setTimeout(() => {
    setIsLoading(false);
    // }, loaderDelay);
    setSearchData(data);
  };

  return (
    <main>
      <DigiLayoutContainer>
        <MainFlex>
          <SearchForm getWorkData={getWorkData} setSearchData={setSearchData} />
          {searchData === null ? (
            <SearchResultsPlaceholder />
          ) : (
            <SearchResults isLoading={isLoading} setIsLoaing={setIsLoading}/>
          )}
        </MainFlex>
      </DigiLayoutContainer>
    </main>
  );
}
