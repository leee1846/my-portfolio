import Styled, { css } from "styled-components";

export const Section = Styled.section`
  width:100%;
  `;

export const PicContainer = Styled.div`
  margin-top:0px;
  top: 20px;
  position: sticky;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:-1;
  `;

export const Image = Styled.img`
  position:absolute;
  max-width:500px;

  ${({ display }) =>
    !display &&
    css`
      display: none;
    `}
`;

export const ContentContainer = Styled.div`
  position:relative;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  z-index:1;
`;

export const Content = Styled.div`
  width:400px;
  background-color:rgba(255, 255, 255, 0.57);
  margin:35vh 0;
  padding:10px 15px;
  border-radius:10px;

  p {
    font-size:.65rem;
    text-align:center;
    color:#383838;
  }
`;
