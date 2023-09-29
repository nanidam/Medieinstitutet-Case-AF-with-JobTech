import {
  DigiExpandableAccordion,
  DigiNavigationPagination,
  DigiTag,
} from "@digi/arbetsformedlingen-react";
import { ResultSummary } from "./ResultSummary";
import { LoaderSpinnerSize, TagSize } from "@digi/arbetsformedlingen";
import { useOutletData } from "../context/useOutletData";
import { matchByText } from "../services/matchByTextServices";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";
import "../style/_pagination.scss";
import { useEffect, useState, useContext, SetStateAction } from "react";
import { getEnrichedOccupations } from "../services/enrichedOccupationsServices";
import { EnrichedOccupationContext } from "../context/EnrichedOccupationContext";
import { StyledDigiLoaderSpinner } from "./styled/Loader";

interface ISearchresultsProps {
  isLoading: boolean;
  setIsLoaing: (data: SetStateAction<boolean>) => void;
}

export default function SearchResults(props: ISearchresultsProps) {

  const { searchData, setSearchData } = useOutletData();
  const [showPagination, setShowPagination] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);

  const { dispatchEnrichedOccupation } = useContext(EnrichedOccupationContext);

  const handlePaginationChange = async (
    e: DigiNavigationPaginationCustomEvent<number>
  ) => {
    if (searchData) {

      const newSearch = {
        input_text:
          searchData.identified_keywords_for_input.competencies.join(" "),
        offset: e.detail !== 1 ? e.detail * 10 - 1 : undefined,
      };
      const newResults = await matchByText(newSearch);

      setSearchData(newResults);

      const newResultEnriched = await getEnrichedOccupations(newResults);

      if (newResultEnriched) {
        dispatchEnrichedOccupation({
          type: "GOT_ENRICHED_DATA",
          payload: newResultEnriched,
        });
      }
    }
  };

  const competencies =
    searchData?.identified_keywords_for_input.competencies.map(
      (competency, i) => {
        return (
          <div key={i}>
            <DigiTag
              className="search-tags"
              afText={competency}
              afSize={TagSize.SMALL}
              afNoIcon={true}
            ></DigiTag>
          </div>
        );
      }
    );

  if (searchData) {
    if (searchData.related_occupations.length > 9 && !showPagination) {
      setShowPagination(true);
      const totalPages = Math.min(10, Math.floor(searchData.hits_total / 10));
      setTotalPages(totalPages);
    } else if (searchData.related_occupations.length <= 9 && showPagination) {
      setShowPagination(false);
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const result = await getEnrichedOccupations(searchData);
      props.setIsLoaing(false);
      if (result) {
        dispatchEnrichedOccupation({
          type: "GOT_ENRICHED_DATA",
          payload: result,
        });
      }
    };

    fetchData();
  }, [dispatchEnrichedOccupation, searchData]);

  if (props.isLoading) {
    return (
      <StyledDigiLoaderSpinner
        afSize={LoaderSpinnerSize.LARGE}
      ></StyledDigiLoaderSpinner>
    );
  } else {
    if (searchData?.related_occupations.length === 0) {
      return (
        <p>
          Tyvärr hittade vi inga yrkestitlar baserade på din sökning, testa
          andra sökord
        </p>
      );
    } else {
      return (
        <section className="searchResults">
          <h4 className="keyWordsHeader">Sökningen baseras på följande ord:</h4>
          <div className="keyWords">{competencies}</div>
          <h3>Följande yrkestitlar matchar din sökning:</h3>
          {searchData?.related_occupations.map((occupation) => (
            <div key={occupation.id}>
              <DigiExpandableAccordion afHeading={occupation.occupation_label}>
                <ResultSummary occupation={occupation} />
              </DigiExpandableAccordion>
            </div>
          ))}
          {showPagination && (
            <article className="pagination-wrapper">
              <DigiNavigationPagination
                afTotalPages={totalPages}
                afInitActivePage={1}
                onAfOnPageChange={handlePaginationChange}
                className="pagination"
              ></DigiNavigationPagination>
            </article>
          )}
        </section>
      );
    }
  }
}

// node html css
//apotek butik läkemedel medicin
