import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconArrowBack,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { IOccupation } from "../models/IOccupation";
import { SalaryStatistics } from "./OccupationSalaryStatistics";
import { OccupationAbout } from "./OccupationAbout";
import { OccupationCompetences } from "./OccupationCompetences";
import { OccupationForecast } from "./OccupationForecast";
import { MainFlex50percent1024 } from "../style/Wrappers";
import { OccupationQuote } from "./OccupationQuote";

interface IOccupationShowProps {
  occupationFound?: IOccupation;
  findIndexText: string;
  chartLineYValues: number[];
  chartLineXValues: string[];
  handleReturnButton: () => void;
  deficiencyValueData2023: { value: string; text: string };
  deficiencyValueData2026: { value: string; text: string };
  isLoading: boolean;
}

export const OccupationShow = ({
  occupationFound,
  findIndexText,
  chartLineYValues,
  chartLineXValues,
  handleReturnButton,
  deficiencyValueData2023,
  deficiencyValueData2026,
  isLoading,
}: IOccupationShowProps) => {
  return (
    <DigiLayoutContainer>
      {occupationFound ? (
        <MainFlex50percent1024>
          <DigiLayoutContainer>
            <DigiLayoutContainer af-no-gutter af-vertical-padding>
              <h2>{occupationFound.occupation_label}</h2>
              <p>
                <span style={{ fontWeight: "bold" }}>
                  {occupationFound.occupation_group.occupation_group_label}
                </span>{" "}
                (SSYK: {occupationFound.occupation_group.ssyk})
              </p>
            </DigiLayoutContainer>
            <OccupationAbout findIndexText={findIndexText}></OccupationAbout>
            {occupationFound && (
              <OccupationCompetences
                occupationFound={occupationFound}
              ></OccupationCompetences>
            )}
            <OccupationForecast
              deficiencyValueData2023={deficiencyValueData2023}
              deficiencyValueData2026={deficiencyValueData2026}
              occupationFound={occupationFound}
            ></OccupationForecast>
          </DigiLayoutContainer>
          <div>
            <SalaryStatistics
              chartLineXValues={chartLineXValues}
              chartLineYValues={chartLineYValues}
              isLoading={isLoading}
            ></SalaryStatistics>
            <OccupationQuote></OccupationQuote>
          </div>
        </MainFlex50percent1024>
      ) : (
        <p>Inget yrke hittades</p>
      )}
      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.FUNCTION}
        afFullWidth={false}
        onAfOnClick={handleReturnButton}
      >
        <DigiIconArrowBack slot="icon" />
        Tillbaka till Sökresultat
      </DigiButton>
    </DigiLayoutContainer>
  );
};
