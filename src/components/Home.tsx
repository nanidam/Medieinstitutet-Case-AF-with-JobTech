import {
  DigiButton,
  DigiLayoutContainer,
  DigiMediaFigure,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router-dom";
import illustration from "/winners.svg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <DigiLayoutContainer>
      <section className="home">
        <div className="homeContent">
          <h1>Välkommen till Yrkesvägledarn</h1>
          <p>
            Här kan du utforska olika utbildningar och se vilka yrkestitlar du
            kan axla efter din utbildning.
          </p>
          <DigiButton onAfOnClick={() => {navigate('/sok-utbildning')}}>
            Sök utbildning
          </DigiButton>
          <DigiButton onAfOnClick={() => {navigate('/sok-yrke')}}>
            Utforska yrkestitlar
          </DigiButton>
        </div>
        <DigiMediaFigure className="img-container">
          <DigiMediaImage
            className="img"
            afUnlazy
            afHeight="375"
            afWidth="375"
            afSrc={illustration}
            afAlt="Illustration av två personer som är glada och håller händerna i luften"
          ></DigiMediaImage>
        </DigiMediaFigure>
      </section>
    </DigiLayoutContainer>
  );
}
