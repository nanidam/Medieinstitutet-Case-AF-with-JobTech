import { useContext, useState } from "react";
import { IOccupation, IOccupationCompetencies } from "../models/IOccupation";
import { EnrichedOccupationContext } from "../context/EnrichedOccupationContext";
import { DigiTag } from "@digi/arbetsformedlingen-react";
import { TagSize } from "@digi/arbetsformedlingen";
import "../style/_occupationCompetences.scss";

interface IOccupationShowProps {
  occupationFound: IOccupation;
}

export const OccupationCompetences = (
  occupationFound: IOccupationShowProps
) => {
  const enrichedOccupationData = useContext(EnrichedOccupationContext);
  const [topCompetencies, setTopCompetencies] = useState<
    IOccupationCompetencies[]
  >([]);

  const matchingMetadata = enrichedOccupationData.stateEnrichedOccupation.find(
    (item) => item.id === occupationFound.occupationFound.id
  );

  if (matchingMetadata && matchingMetadata.metadata) {
    const competencies =
      matchingMetadata.metadata.enriched_candidates_term_frequency.competencies;

    if (competencies) {
      const getTopCompetencies = competencies.slice(0, 15);

      if (
        JSON.stringify(topCompetencies) !== JSON.stringify(getTopCompetencies)
      ) {
        setTopCompetencies(getTopCompetencies);
      }
    }
  }

  return (
    <>
      <h4>Vanligaste kompetenserna</h4>
      <section className="competence-wrapper">
        {topCompetencies.length > 0 ? (
          topCompetencies.map((competency, index) => (
            <DigiTag
              className="competence-tag"
              key={index}
              afText={competency.term}
              afSize={TagSize.SMALL}
              afNoIcon={true}
            ></DigiTag>
          ))
        ) : (
          <p>Hittar inga matchande kompetenser.</p>
        )}
      </section>
    </>
  );
};

// html css node
