import * as Styled from "./Navbar.style";
import Link from "next/link";
import Nav from "../Nav/Nav";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EventNoteIcon from "@material-ui/icons/EventNote";

const Navbar = () => {
  return (
    <Styled.Nav>
      <Styled.NavBox>
        <Link href='/about'>
          <Styled.Logo>kyungjunelee</Styled.Logo>
        </Link>
        <Styled.NavRight>
          <Nav
            href='/about'
            icon={
              <VideoLibraryIcon
                style={{ color: "#141414", transform: "scale(0.7)" }}
              />
            }
          >
            About me
          </Nav>
          <Nav
            href='/myStory'
            icon={
              <PermIdentityIcon
                style={{ color: "#141414", transform: "scale(0.7)" }}
              />
            }
          >
            My story
          </Nav>
          <Nav
            href='/projects'
            icon={
              <EventNoteIcon
                style={{ color: "#141414", transform: "scale(0.7)" }}
              />
            }
          >
            Projects
          </Nav>
        </Styled.NavRight>
      </Styled.NavBox>
    </Styled.Nav>
  );
};

export default Navbar;
