import { DigiLoaderSpinner } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";
import { complementary2Darkest } from "./variables";

export const StyledDigiLoaderSpinner = styled(DigiLoaderSpinner).attrs({
  className: "group9styling",
})`
  digi-icon {
    --digi--color--icons--primary: ${complementary2Darkest};
  }
`;
