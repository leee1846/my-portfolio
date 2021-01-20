import Styled from "styled-components";

export const Container = Styled.section`
  max-width:1200px;
  margin:40px auto;
  padding:0 30px;
  color:#383838;
`;

export const Project = Styled.div`
  width:100%;
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
    width:105%;
  }
`;

export const Title = Styled.h2`
  font-size:.75rem;
  margin-bottom:10px;
`;

export const Content = Styled.p`
  font-size:.55rem;
  width:70%;
  font-weight:100;
  line-height:.7rem;
  ul {
    margin-top:5px;
    font-size:.52rem;
  }
`;

export const Github = Styled.a`
  font-size:.5rem;
  color:#383838;
  text-decoration:none;
  border-bottom:.5px solid gray;
  position:relative;
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
    color:black;
  }
`;
