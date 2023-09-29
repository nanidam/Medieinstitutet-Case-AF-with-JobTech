interface IOccupationAboutProps {
  findIndexText: string;
}

export const OccupationAbout = ({ findIndexText }: IOccupationAboutProps) => {
  return (
    <>
      <h3>Yrkesbeskrivning{}</h3>
      <p>{findIndexText}</p>
    </>
  );
};
