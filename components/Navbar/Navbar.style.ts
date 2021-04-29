import Styled from "styled-components";

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
  @media ${({ theme }) => theme.device.tablet}{
    padding:10px 20px;
  }
`;

export const Logo = Styled.a`
  text-decoration:none;
  cursor:pointer;
  font-size:22px;
  color:${({ theme }) => theme.basicFontColor};
  font-weight:500;
  @media ${({ theme }) => theme.device.tablet}{
    font-size:18px;
  }
`;

export const NavRight = Styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
`;
