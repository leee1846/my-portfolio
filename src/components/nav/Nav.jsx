import React from "react";
import * as Styled from "./Nav.style";

function Nav() {
  return (
    <Styled.Nav>
      <Styled.NavBox>
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
      </Styled.NavBox>
    </Styled.Nav>
  );
}

export default Nav;
