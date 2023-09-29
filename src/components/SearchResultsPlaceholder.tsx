import { DigiMediaImage } from "@digi/arbetsformedlingen-react";
import illustration from "/office.svg";

export default function SearchResultsPlaceholder() {
  return (
    <div className="placeholder">
      <DigiMediaImage
        afUnlazy
        afHeight="300"
        afWidth="300"
        afSrc={illustration}
        afAlt="Illustratino föreställande en man och en kvinna framför en dator"
      ></DigiMediaImage>
    </div>
  );
}
