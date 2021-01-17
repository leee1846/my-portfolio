import React from "react";
import * as Styled from "./Nav.style";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Styled.Nav>
      <Styled.NavBox>
        <Styled.Logo to='/'>kyungjunelee</Styled.Logo>
        <Styled.NavRight>
          <Styled.Links to='/'>
            <Styled.Cartoons />
            <Styled.Pocket>My story</Styled.Pocket>
          </Styled.Links>
          <Styled.Links to='/about'>
            <Styled.About />
            <Styled.Pocket>About me</Styled.Pocket>
          </Styled.Links>
          <Styled.Links to='/projects'>
            <Styled.Project />
            <Styled.Pocket>Projects</Styled.Pocket>
          </Styled.Links>
        </Styled.NavRight>
      </Styled.NavBox>
    </Styled.Nav>
  );
}

export default Nav;
