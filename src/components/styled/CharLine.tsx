import { DigiChartLine } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";
import { greyscaleLightest2, secondaryBase, secondaryDark } from "./variables";

export const ChartLineParent = styled.div`
  width: 90%;
  height: 400px;
  background-color: ${greyscaleLightest2};
  padding: 1rem;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-top: 5.5rem;
  }
`;

export const StyledChartLine = styled(DigiChartLine).attrs({
  className: "group9styling",
})`
  .digi-button {
    --digi--icon--color: ${secondaryDark};
    --digi--button--color--text--function--default: ${secondaryDark};
  }
  .sc-digi-icon-table-h svg.sc-digi-icon-table {
    --digi--icon--color: ${secondaryDark};
    --digi--button--color--text--function--default: ${secondaryDark};
  }

  svg.sc-digi-icon-chart {
    --digi--icon--color: ${secondaryDark};
    --digi--button--color--text--function--default: ${secondaryDark};
  }

  circle {
    stroke: white;
    fill: ${secondaryBase};
    pointer-events: none;
    stroke-width: 2px;
  }

  path.linePath {
    stroke-linecap: round;
    stroke-width: 4;
    fill: none;
    /* stroke: ${secondaryDark}; */
  }
`;
