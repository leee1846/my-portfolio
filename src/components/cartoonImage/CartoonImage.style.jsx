import Styled, { css } from "styled-components";

export const PicContainer = Styled.li`
  position: absolute;
  opacity: 1;
  width: 70vw;
  transition: 0.3s;

  ${({ displayImage }) =>
    !displayImage &&
    css`
      opacity: 0;
    `}
  `;

export const Image = Styled.img`
  width: 100%;
`;
