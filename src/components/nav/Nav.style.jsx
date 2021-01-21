import Styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EventNoteIcon from "@material-ui/icons/EventNote";

export const Nav = Styled.nav`
  padding:5px 30px;
  box-shadow:0 1px 3px #ececec;
  position:sticky;
  top:0;
  z-index:10000;
  background-color:rgba(255, 255, 255, 0.931);
  `;

export const NavBox = Styled.div`
  max-width:1200px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Logo = Styled(Link)`
  text-decoration:none;
  cursor:pointer;
  font-size:.6rem;
  color:#383838;
`;

export const NavRight = Styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
`;

export const Pocket = Styled.span`
  position:absolute;
  top:35px;
  background-color:#363636;
  font-size:5px;
  color:#f0f0f0;
  border-radius:5px;
  box-shadow:-1px 1px 3px gray;
  padding:5px 7px;
  transition:.1s linear;
  opacity:0;
`;

const navStyle = css`
  color: #141414;
  transform: scale(0.5);
`;

export const Cartoons = Styled(VideoLibraryIcon)`
  ${navStyle}
`;

export const About = Styled(PermIdentityIcon)`
  ${navStyle}
`;

export const Project = Styled(EventNoteIcon)`
  ${navStyle}
`;

export const Links = Styled(Link)`
  position:relative;
  text-decoration:none;
  margin: 0 5px;
  `;

export const IconBox = Styled.div`
  position:relative;
  width:30px;
  height:30px;
  cursor:pointer;
  background-color:#e9e9e9;
  border-radius:50%;
  width:27px;
  height:27px;
    display:flex;
  justify-content:center;
  align-items:center;
  &:hover {
    background-color:#e2e2e2;
  }
  &:hover>${Pocket} {
    opacity: 1;
  }
`;
