import {
  DigiExpandableAccordion,
  DigiMediaImage,
  DigiNavigationPagination,
} from "@digi/arbetsformedlingen-react";
import { IEducations } from "../models/IEducations";
import EducationResultSummary from "./EducationResultSummary";
import illustration from "/coding.svg";
import "../style/_searchEducationResults.scss";
import { LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import { ISearchEducationParams } from "../models/ISearchEducationParams";
import { getEducations } from "../services/educationServices";
import { useState } from "react";
import { StyledDigiLoaderSpinner } from "./styled/Loader";

interface IEducationProps {
  showNoResult: boolean;
  searchEduData: IEducations | null;
  isLoading: boolean;
  setSerachEduData: (value: IEducations | null) => void;
  eduSearchHistory: ISearchEducationParams;
}

export default function SearchEducationResults({
  showNoResult,
  searchEduData,
  isLoading,
  setSerachEduData,
  eduSearchHistory,
}: IEducationProps) {
  const [totalPages, setTotalPages] = useState<number>(0);
  const [showPagination, setShowPagination] = useState<boolean>(false);
  let accordionComponents: JSX.Element[] = [];

  if (searchEduData) {
    if (searchEduData.result) {
      const titles = searchEduData.result.map(
        (edu) => edu.education.title[0].content
      );
      accordionComponents = titles.map((title, index) => (
        <DigiExpandableAccordion
          key={index}
          afHeading={`${title}, ${searchEduData.result[index].providerSummary.providers[0]}`}
        >
          <EducationResultSummary
            id={searchEduData.result[index].education.identifier}
          />
        </DigiExpandableAccordion>
      ));
    }
  }

  const eduPagination = async (
    e: DigiNavigationPaginationCustomEvent<number>
  ) => {
    const newSearch = {
      query: eduSearchHistory.query,
      distance: eduSearchHistory.distance,
      education_form: eduSearchHistory.education_form,
      municipality_code: eduSearchHistory.municipality_code,
      offset: e.detail !== 1 ? e.detail * 10 - 10 : undefined,
    };

    const newResult = await getEducations(newSearch);

    if (newResult && searchEduData !== newResult) {
      setSerachEduData(newResult);
    }
  };

  if (showNoResult && showPagination) {
    setShowPagination(false);
  }

  if (searchEduData) {
    if (searchEduData.hits < 10) {
      if (showPagination) {
        setShowPagination(false);
      }
    } else if (searchEduData.hits > 1000 && totalPages !== 100) {
      if (!showPagination) {
        setShowPagination(true);
      }
      setTotalPages(100);
    } else if (searchEduData.hits < 100 && searchEduData.hits > 10) {
      const totalPagesCalc = Math.ceil(searchEduData.hits / 10);

      if (totalPagesCalc > 1 && !showPagination) {
        setShowPagination(true);
      }

      if (totalPages !== totalPagesCalc) {
        setTotalPages(totalPagesCalc);
      }
    }
  }

  if (isLoading) {
    return (
      <section className="eduSearchResults">
        <StyledDigiLoaderSpinner
          className="edu-loader"
          afSize={LoaderSpinnerSize.LARGE}
        ></StyledDigiLoaderSpinner>
      </section>
    );
  } else if (showNoResult) {
    return <h3>Inga utbildningar hittades. Var vänlig sök på något annat.</h3>;
  } else if (searchEduData && searchEduData.hits > 0) {
    return (
      <section className="eduSearchResults">
        <h3>Utbildningar</h3>
        {accordionComponents}
        {showPagination && (
          <section className="pagination-wrapper">
            <DigiNavigationPagination
              afTotalPages={totalPages}
              afInitActivePage={1}
              onAfOnPageChange={eduPagination}
            ></DigiNavigationPagination>
          </section>
        )}
      </section>
    );
  } else if (searchEduData === null) {
    return (
      <section className="eduSearchResults">
        <DigiMediaImage
          className="search-edu-img"
          afUnlazy
          afHeight="300"
          afWidth="300"
          afSrc={illustration}
          afAlt="Illustration person framför datorn och hörlurar i öronen"
        />
      </section>
    );
  }
}
