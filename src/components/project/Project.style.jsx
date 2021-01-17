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
  max-width:40vw;
  height:40vh;
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
  font-size:.58rem;
  width:70%;
  font-weight:100;
  ul {
    margin-top:5px;
    font-size:.53rem;
  }
`;

export const Github = Styled.a`
  font-size:.51rem;
  color:#383838;
  &:hover {
    color:black;
  }
`;
