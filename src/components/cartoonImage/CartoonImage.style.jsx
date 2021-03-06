import Styled, { css } from "styled-components";

export const PicContainer = Styled.li`
  position: absolute;
  opacity: 1;
  width:100%;
  transition: 0.3s linear;
  display:Flex;
  justify-content:center;
  align-items:center;

  ${({ displayImage }) =>
    !displayImage &&
    css`
      opacity: 0;
    `}
  `;

export const Image = Styled.img`
  width:100%;
  max-height:80vh;
  object-fit:contain;
`;
