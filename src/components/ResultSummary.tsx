import { IOccupation, IOccupationCompetencies } from "../models/IOccupation";

import {
  //LinkButtonSize,
  //LinkButtonVariation,
  ListType,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  //DigiLinkButton,
  DigiList,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect, useContext } from "react";
import { StyledCompetenciesList } from "./styled/CompetenciesList";
import { Link } from "react-router-dom";
import { SSYKdataContext } from "../context/SSYKdataContext";
import { EnrichedOccupationContext } from "../context/EnrichedOccupationContext";
import { useSSYKDetails } from "../hooks/useSSYKDetails";

interface ResultSummaryProps {
  occupation: IOccupation;
}

interface ICompetency {
  term: string;
  // percent_for_occupation?: number;
}

export const ResultSummary = ({ occupation }: ResultSummaryProps) => {
  const [topFive, setTopFive] = useState<string[]>([]);
  // const [matchingText, setMatchingText] = useState<string | null>(null);
  const ssykdata = useContext(SSYKdataContext);
  const { stateEnrichedOccupation } = useContext(EnrichedOccupationContext);

  const matchingText = useSSYKDetails(
    occupation.occupation_group.ssyk,
    ssykdata
  );

  useEffect(() => {
    const getData = () => {
      const results = stateEnrichedOccupation.find(
        (globalOccupation) => globalOccupation.id === occupation.id
      );

      if (results?.metadata) {
        const competencies: IOccupationCompetencies[] =
          results.metadata.enriched_candidates_term_frequency.competencies;

        const topFive = competencies
          .slice(0, 5)
          .map((comp: ICompetency) => comp.term);
        setTopFive(topFive);
      }
    };

    // const getJobSummary = async () => {
    //   try {
    //     const ssykToMatch = occupation.occupation_group.ssyk;

    //     const indexOfMatch = ssykdata.variables[0].values.findIndex(
    //       (value) => value === ssykToMatch
    //     );
    //     if (indexOfMatch !== -1) {
    //       const matchingText = ssykdata.variables[0].valueTexts[indexOfMatch];
    //       setMatchingText(matchingText);
    //     } else {
    //       console.log(`Matching SSYK Value: ${ssykToMatch} not found.`);
    //       setMatchingText(null);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching SSYK data:", error);
    //     setMatchingText(null);
    //   }
    // };

    getData();
    // getJobSummary();
  }, [occupation, ssykdata, stateEnrichedOccupation]);

  return (
    <>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h6>{matchingText && <p>Översikt: {matchingText}</p>}</h6>
        <p>
          Tillhör yrkesgrupp:{" "}
          {occupation.occupation_group.occupation_group_label}(SSYK:{" "}
          {occupation.occupation_group.ssyk})
        </p>

        <h6>Topp 5 kompetenser:</h6>
        <DigiList afListType={ListType.BULLET}>
          <div></div>
          {topFive.map((term, index) => (
            <StyledCompetenciesList key={index} className="competence">
              {term}
            </StyledCompetenciesList>
          ))}
        </DigiList>
        {/* <DigiLinkButton
          afHref={`/yrke/${occupation.concept_taxonomy_id}`}
          afSize={LinkButtonSize.MEDIUM}
          afVariation={LinkButtonVariation.SECONDARY}
        >
          Läs mer
        </DigiLinkButton> */}
        <Link to={`/yrke/${occupation.concept_taxonomy_id}`}>Läs mer</Link>
      </DigiTypography>
    </>
  );
};

// html css javascript
