import Styled from "styled-components";

export const Container = Styled.section`
  max-width:1200px;
  margin:60px auto;
  padding:0 30px;
  display:flex;
  flex-direction:column;
  color:#383838;
`;

export const Top = Styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  margin-bottom:9vh;
  h1 {
    flex:1;
    font-weight:bold;
    font-size:.9rem;
    line-height:1rem;
  }
  p {
    flex:1;
    font-size:.65rem;
    line-height:.8rem;
    margin-left:10vh;
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
    font-size:.55rem;
    margin-bottom:4vh;
    line-height:.8rem;
    font-weight:medium;
  }

  li {
    font-size:.53rem;
    font-weight:100;
    margin-bottom:7px;
  }
`;

export const Address = Styled.a`
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
    background-color:#ffffff;
    transition:.4s linear;
  }
  &:hover {
    color:black;
  }
  &:hover:after {
    width:100%;
  }
`;
