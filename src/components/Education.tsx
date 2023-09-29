import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { MainFlex } from "../style/Wrappers";
import SearchEducation from "./SearchEducation";
import SearchEducationResults from "./SearchEducationResults";
import { useState } from "react";
import { useOutletData } from "../context/useOutletData";

export default function Education() {
  const [showNoResult, setShowNoResult] = useState<boolean>(false);
  const { searchEduData, setSearchEduData } = useOutletData();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [eduSearchHistory, setEduSeachHistory] = useState({});

  return (
    <DigiLayoutContainer>
      <MainFlex>
        <SearchEducation
          showNoResult={showNoResult}
          setShowNoResult={setShowNoResult}
          setSerachEduData={setSearchEduData}
          setIsLoading={setIsLoading}
          setEduSeachHistory={setEduSeachHistory}
        ></SearchEducation>
        <SearchEducationResults
          showNoResult={showNoResult}
          searchEduData={searchEduData}
          isLoading={isLoading}
          setSerachEduData={setSearchEduData}
          eduSearchHistory={eduSearchHistory}
        ></SearchEducationResults>
      </MainFlex>
    </DigiLayoutContainer>
  );
}
