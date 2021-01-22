import Styled from "styled-components";

export const Container = Styled.section`
  margin:80px auto;
  padding:0 30px;
  display:flex;
  flex-direction:column;
`;

export const Top = Styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  margin-bottom:9vh;
  h1 {
    flex:1;
    font-weight:900;
    font-size:26px;
    line-height:34px;
  }
  p {
    flex:1;
    font-size:18px;
    line-height:28px;
    margin-left:10vh;
    font-weight:500;
  }
`;

export const Bottom = Styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
`;

export const Image = Styled.img`
  flex:1;
  max-width:50%;
  height:50vh;
  object-fit:cover;
`;

export const Inform = Styled.ul`
  flex:1;
  margin-left:10vh;

  p {
    font-size:14px;
    margin-bottom:4vh;
    line-height:26px;
    font-weight:100;
  }

  li {
    font-size:14px;
    font-weight:100;
    margin-bottom:10px;
  }
`;

export const Address = Styled.a`
  color:#383838;
  text-decoration:none;
  border-bottom:.5px solid #1d1d1d;
  position:relative;

  &:after {
    position:absolute;
    bottom:-1px;
    left:0;
    content:'';
    height:1px;
    width:0;
    background-color:#ffffff;
    transition:.4s linear;
  }
  &:hover {
    color:#929292;
  }
  &:hover:after {
    width:100%;
  }
`;
