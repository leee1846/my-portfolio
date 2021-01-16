import Styled, { css } from "styled-components";

export const Section = Styled.section`
  width:100%;
  height:100vh;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const Image = Styled.img`
  position:absolute;
  max-width:600px;

  ${({ display }) =>
    !display &&
    css`
      display: none;
    `}
`;
