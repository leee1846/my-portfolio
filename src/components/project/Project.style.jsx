import Styled from "styled-components";

export const Container = Styled.section`
  margin:40px auto;
`;

export const Project = Styled.div`
  border-bottom:.5px solid #b3b3b3;
  padding:50px 0 20px 0;
`;

export const ImageBox = Styled.div`
  max-width:45vw;
  max-height:500px;
  margin-bottom:10px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  box-shadow:2px 2px 3px #b4b4b4;
  `;

export const Img = Styled.img`
  width:100%;
  transition:.2s linear;

  &:hover {
    transform:scale(1.1)
  }
`;

export const Title = Styled.h2`
  font-size:22px;
  margin-bottom:10px;
`;

export const Content = Styled.p`
  font-size:16px;
  width:70%;
  font-weight:100;
  line-height:21px;
  @media (max-width:767px){
    width:90%;
  }
`;

export const Github = Styled.a`
  display:inline-block;
  font-size:16px;
  color:#1d1d1d;
  text-decoration:none;
  border-bottom:.5px solid #1d1d1d;
  position:relative;
  margin-top:10px;
  font-weight:bold;
  &:after {
    position:absolute;
    bottom:-1px;
    left:0;
    content:'';
    height:1px;
    width:0;
    background-color:#fbfbfb;
    transition:.5s linear;
  }
  &:hover:after {
    width:100%;
  }
  &:hover {
    color:#929292;
    color:dodgerblue;
  }
`;
