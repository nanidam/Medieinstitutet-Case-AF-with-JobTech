import styled from "styled-components";

export const MainFlex = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 50px;
  }
`;

export const MainFlex50percent = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;

export const MainFlex50percent1024 = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
`;
