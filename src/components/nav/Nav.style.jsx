import Styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = Styled.nav`
  background-color:#f0f1f3;
  padding:10px 0;
  box-shadow:0 5px 7px #ececec;
  position:sticky;
  top:0;
  z-index:10000;
  `;

export const NavBox = Styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  max-width:1200px;
  margin:0 auto;
`;

export const Links = Styled(Link)`
  color:#4d4d4d;
  text-decoration:none;
  margin: 0 5px;
  cursor:pointer;
  font-size:.75rem;
  
  &:hover {
    color:#1c617c;
  }
`;
