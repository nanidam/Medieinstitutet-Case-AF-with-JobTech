import { DigiNavigationSidebar } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";
import { whiteDarkest3 } from "./variables";

export const StyledDigiNavigationSidebar = styled(DigiNavigationSidebar).attrs({
  className: "group9styling",
})`
  --digi--navigation-sidebar--wrapper--width--small: 60vw;
  --digi--navigation-sidebar--wrapper--background-color: ${whiteDarkest3};
`;
