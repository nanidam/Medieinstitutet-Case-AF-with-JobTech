import { QuoteSingleVariation } from "@digi/arbetsformedlingen";
import { StyledDigiQuoteSingle } from "./styled/Quotes";
import "../style/_occupationQuote.scss";

export const OccupationQuote = () => {
  return (
    <>
      <StyledDigiQuoteSingle
        afVariation={QuoteSingleVariation.PRIMARY}
        // afQuoteAuthorName="Okänd användare"
        afQuoteAuthorTitle="app-testare"
      >
        Som student använder jag appen Yrkesvägledarn för att utforska olika yrken och
        utbildningsalternativ baserat på mina intressen och favoritämnen. Appen hjälper mig
        att hitta karriärmöjligheter som matchar mina passioner och ger mig information om
        arbetsuppgifter, lönepotential och efterfrågade kompetenser för varje yrke. Jag kan
        även använda den för att söka efter relevanta utbildningar och kurser på olika
        institutioner. Sammantaget har Yrkesvägledarn varit en ovärderlig resurs för min
        karriärplanering.
      </StyledDigiQuoteSingle>
    </>
  );
};
