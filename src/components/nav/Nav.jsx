import React from "react";
import * as Styled from "./Nav.style";

function Nav() {
  return (
    <Styled.Nav>
      <Styled.NavBox>
        <Styled.Logo to='/'>kyungjunelee</Styled.Logo>
        <Styled.NavRight>
          <Styled.Links to='/'>
            {/* <Styled.IconBox>
              <Styled.Cartoons />
              <Styled.Pocket>My story</Styled.Pocket>
            </Styled.IconBox> */}
            <Styled.IconBox>
              <Styled.About />
              <Styled.Pocket>About me</Styled.Pocket>
            </Styled.IconBox>
          </Styled.Links>
          <Styled.Links to='/myStory'>
            {/* <Styled.IconBox>
              <Styled.About />
              <Styled.Pocket>About me</Styled.Pocket>
            </Styled.IconBox> */}
            <Styled.IconBox>
              <Styled.Cartoons />
              <Styled.Pocket>My story</Styled.Pocket>
            </Styled.IconBox>
          </Styled.Links>
          <Styled.Links to='/projects'>
            <Styled.IconBox>
              <Styled.Project />
              <Styled.Pocket>Projects</Styled.Pocket>
            </Styled.IconBox>
          </Styled.Links>
        </Styled.NavRight>
      </Styled.NavBox>
    </Styled.Nav>
  );
}

export default Nav;
