import Styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import EventNoteIcon from "@material-ui/icons/EventNote";

export const Nav = Styled.nav`
  box-shadow:0 1px 3px #ececec;
  position:sticky;
  top:0;
  z-index:10000;
  background-color:rgba(255, 255, 255, 0.931);
  margin:0 auto;
  `;

export const NavBox = Styled.div`
  padding:15px 55px;
  max-width:1900px;
  margin:0 auto;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

export const Logo = Styled(Link)`
  text-decoration:none;
  cursor:pointer;
  font-size:22px;
  color:#1d1d1d;
  font-weight:500;
`;

export const NavRight = Styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
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

const navStyle = css`
  color: #141414;
  transform: scale(0.7);
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
  &:hover>${Pocket} {
    opacity: 1;
  }
`;
