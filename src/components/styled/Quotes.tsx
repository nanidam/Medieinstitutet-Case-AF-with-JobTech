import { DigiQuoteSingle } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";
import { primaryLighter } from "./variables";

export const StyledDigiQuoteSingle = styled(DigiQuoteSingle).attrs({
  className: "group9styling",
})`
  --digi--quote-single--background--primary: ${primaryLighter};
  height: 0;
`;
