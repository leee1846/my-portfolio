import Styled from "styled-components";

export const Icon = Styled(({ icon }) => icon)`
`;

export const Pocket = Styled.span`
  position:absolute;
  top:47px;
  background-color:#363636;
  font-size:14px;
  color:#f0f0f0;
  border-radius:8px;
  box-shadow:-1px 1px 3px gray;
  padding:7px 10px;
  transition:.1s linear;
  opacity:0;
`;

export const Links = Styled.a`
  position:relative;
  text-decoration:none;
  margin: 0 5px;
  `;

export const IconBox = Styled.div`
  position:relative;
  width:40px;
  height:40px;
  cursor:pointer;
  background-color:#e9e9e9;
  border-radius:50%;
    display:flex;
  justify-content:center;
  align-items:center;
  &:hover {
    background-color:#e2e2e2;
  }
  &:hover+${Pocket} {
    opacity: 1;
  }
`;
