import { LayoutBlockVariation, LinkVariation } from "@digi/arbetsformedlingen";
import {
  DigiIconExternalLinkAlt,
  DigiLink,
  DigiMediaImage,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { MainFlex50percent } from "../style/Wrappers";
import { StyledDigiLayoutBlock } from "./styled/Layout";
import illustration from "/blooming.svg";

export const About = () => {
  return (
    <>
      <MainFlex50percent>
        <StyledDigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
          <DigiTypography>
            <h2>Om denna app</h2>
            <p>
              Som en del av kursen Javascript-Fördjupning MedieInstitutet 2023
              fick vi i uppgift att Bygga applikationer på Arbetsförmedlingens
              öppna data{" "}
              <DigiLink
                afHref="https://jobtechdev.se/sv"
                afTarget="_blank"
                afVariation={LinkVariation.SMALL}
              >
                https://jobtechdev.se
              </DigiLink>{" "}
              för studenter.
            </p>
            <p>
              Detta genom ramverket React där uppgiften var att matcha fram
              relaterade yrken utifrån utbildningstitel och
              utbildningsbeskrivning.
            </p>
            <p>
              {" "}
              Uppgiften bestod av att hämta data på ett strukturerat sätt med
              hjälp av antingen fetch eller axios, och även skapa tjänster
              (services) som vi använder oss av för att hämta data. Vi skulle
              även använda oss av de React-koncept vi lärt oss under kursens
              gång (context, state, routing mm) och använda oss av
              Arbetsförmedlingens Designsystem.
            </p>
            <p>
              {" "}
              Vårt grupparbete utmynnade i denna app, Yrkesvägledaren, där du
              som användare dels kan söka passande yrken av det du är
              intresserad av, genom att skriva nyckelord såsom ämnen,
              alternativt kursbeskrivningar. Du kan också söka utbildningar
              gällande det du gillar, och därifrån gå vidare för att få mer info
              gällande yrken. Du får både en kort beskrivning, lite
              framtidsprognos samt löneutveckling de senaste 5åren. Vi har
              utöver JobTechs öppna data också använt statistik från SCB.
            </p>
            <p>
              Vi som gjort denna app går i klassen FED22d och ni hittar oss på
              följande Github-repon:
            </p>
            <ul style={{ listStyle: "none" }}>
              <li>
                <DigiLink
                  afHref="https://github.com/nanidam"
                  afTarget="_blank"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Nani Dam
                </DigiLink>
              </li>
              <li>
                <DigiLink
                  afHref="https://github.com/evelinanorlin"
                  afTarget="_blank"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Evelina Norlin
                </DigiLink>
              </li>
              <li>
                <DigiLink
                  afHref="https://github.com/jenmwa"
                  afTarget="_blank"
                  afVariation={LinkVariation.SMALL}
                >
                  <DigiIconExternalLinkAlt slot="icon"></DigiIconExternalLinkAlt>
                  Jenny Waller
                </DigiLink>
              </li>
            </ul>

            <span>© Yrkestipsarna 2023</span>
          </DigiTypography>
        </StyledDigiLayoutBlock>
        <StyledDigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY}>
          <DigiMediaImage
            afUnlazy
            af-fullwidth
            afSrc={illustration}
            afAlt="Illustration där en person sitter på marken med 3 blommor"
          ></DigiMediaImage>
        </StyledDigiLayoutBlock>
      </MainFlex50percent>
    </>
  );
};
