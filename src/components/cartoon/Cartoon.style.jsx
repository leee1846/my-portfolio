import Styled, { css } from "styled-components";

export const Section = Styled.section`
  width:100%;
  /* height:100vh;
  position:relative; */
  `;

export const ImageContainer = Styled.ul`
  margin: 0 15px;
  top: 0;
  position: sticky;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = Styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
