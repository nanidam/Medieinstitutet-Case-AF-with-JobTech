import {
  DigiLayoutColumns,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { SVGCircle } from "./SVGCircle";
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import { IOccupation } from "../models/IOccupation";

interface IOccupationForecast {
  deficiencyValueData2023: { value: string; text: string };
  deficiencyValueData2026: { value: string; text: string };
  occupationFound?: IOccupation;
}

export const OccupationForecast = ({
  deficiencyValueData2023,
  deficiencyValueData2026,
  occupationFound,
}: IOccupationForecast) => {
  return (
    <>
      <DigiLayoutContainer af-no-gutter af-vertical-padding>
        <h4>Framtidsprognos</h4>
        <p>
          Arbetsförmedlingen bedömning gällande bristvärdet för{" "}
          {occupationFound?.occupation_label}.
        </p>
        <DigiLayoutColumns
          afElement={LayoutColumnsElement.DIV}
          afVariation={LayoutColumnsVariation.TWO}
        >
          <SVGCircle
            title="2023"
            value={deficiencyValueData2023.value}
            text={deficiencyValueData2023.text}
          ></SVGCircle>
          <SVGCircle
            title="2026"
            value={deficiencyValueData2026.value}
            text={deficiencyValueData2026.text}
          ></SVGCircle>
        </DigiLayoutColumns>
      </DigiLayoutContainer>
    </>
  );
};
