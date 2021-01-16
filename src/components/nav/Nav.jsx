import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./Nav.style";

function Nav() {
  return (
    <Styled.Nav>
      <Styled.Links to='/'>cartoon</Styled.Links>
      <Styled.Links to='/about'>about</Styled.Links>
      <Styled.Links to='/projects'>projects</Styled.Links>
    </Styled.Nav>
  );
}

export default Nav;
