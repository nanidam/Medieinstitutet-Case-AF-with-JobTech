import { DigiButton } from "@digi/arbetsformedlingen-react";
import styled from "styled-components";

export const StyledDigiButton = styled(DigiButton).attrs({
  className: "testing",
})`
  --digi--button--width: 100%;

  --digi--button--color--background--primary--default: #2a2a2a;
  --digi--button--color--background--primary--hover: yellow;
  /* --digi--button--color--background--primary--focus:
  --digi--button--color--background--primary--active: */

  --digi--button--color--text--primary--default: #f3adad;
  --digi--button--color--text--primary--hover: darkslategrey;
  /* --digi--button--color--text--primary--focus:
  --digi--button--color--text--primary--active: */

  /* --digi--button--color--icon--primary--default:
  --digi--button--color--icon--primary--hover:
  --digi--button--color--icon--primary--focus:
  --digi--button--color--icon--primary--active: */

  --digi--button--color--border--primary--default: #ffff29;
  /* --digi--button--color--border--primary--hover:
  --digi--button--color--border--primary--focus:
  --digi--button--color--border--primary--active: */

  /* --digi--button--border-radius--primary--default:
  --digi--button--border-radius--primary--hover:
  --digi--button--border-radius--primary--focus:
  --digi--button--border-radius--primary--active:

  --digi--button--border-width--primary--default:
  --digi--button--border-width--primary--hover:
  --digi--button--border-width--primary--focus:
  --digi--button--border-width--primary--active:

  --digi--button--border-style--primary--default:
  --digi--button--border-style--primary--hover:
  --digi--button--border-style--primary--focus:
  --digi--button--border-style--primary--active: */
`;
