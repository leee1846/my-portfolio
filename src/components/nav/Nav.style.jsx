import Styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EventNoteIcon from "@material-ui/icons/EventNote";

export const Nav = Styled.nav`
  padding:5px 0;
  box-shadow:0 1px 3px #ececec;
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

export const Pocket = Styled.span`
  position:absolute;
  top:35px;
  background-color:#363636;
  font-size:.5rem;
  color:#f0f0f0;
  border-radius:5px;
  box-shadow:-1px 1px 3px gray;
  padding:5px;
  transition:.1s linear;
  opacity:0;
`;

const navStyle = css`
  color: #141414;
  transform: scale(0.5);
  &:hover ~ ${Pocket} {
    opacity: 1;
  }
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
  cursor:pointer;
  background-color:#e9e9e9;
  border-radius:50%;
  width:30px;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
  
  &:hover {
    background-color:#e2e2e2;
  }
`;
