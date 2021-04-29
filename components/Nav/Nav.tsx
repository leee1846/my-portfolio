import * as Styled from "./Nav.style";
import Link from "next/link";

const Nav = () => {
  return (
    <Styled.Nav>
      <Styled.NavBox>
        <Link href='/about'>
          <Styled.Logo>kyungjunelee</Styled.Logo>
        </Link>
        <Styled.NavRight>
          <Link href='/about'>
            <Styled.Links>
              <Styled.IconBox>
                <Styled.About />
                <Styled.Pocket>About me</Styled.Pocket>
              </Styled.IconBox>
            </Styled.Links>
          </Link>
          <Link href='/myStory'>
            <Styled.Links>
              <Styled.IconBox>
                <Styled.Cartoons />
                <Styled.Pocket>My story</Styled.Pocket>
              </Styled.IconBox>
            </Styled.Links>
          </Link>
          <Link href='/projects'>
            <Styled.Links>
              <Styled.IconBox>
                <Styled.Project />
                <Styled.Pocket>Projects</Styled.Pocket>
              </Styled.IconBox>
            </Styled.Links>
          </Link>
        </Styled.NavRight>
      </Styled.NavBox>
    </Styled.Nav>
  );
};

export default Nav;
