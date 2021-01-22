import Styled from "styled-components";

export const Container = Styled.section`
  margin:120px auto;
  display:flex;
  flex-direction:column;
`;

export const Top = Styled.div`
  display:flex;
  width:100%;
  margin-bottom:20vh;
  h1 {
    font-weight:900;
    font-size:32px;
    line-height:46px;
    width: 50%;
    margin-right:13%;
  }
  p {
    width:32%;
    font-size:20px;
    line-height:40px;
  }
`;

export const Bottom = Styled.div`
  display:flex;
  width:100%;
`;

export const Image = Styled.img`
  width: 50%;
  margin-right:13%;
  height:50vh;
  object-fit:cover;
`;

export const Inform = Styled.ul`
  width:32%;

  p {
    font-size:16px;
    margin-bottom:4vh;
    line-height:32px;
    font-weight:100;
  }

  li {
    font-size:16px;
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
