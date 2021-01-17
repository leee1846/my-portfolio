import Styled from "styled-components";
import image from "../../images/image.jpg";

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
    font-size:.57rem;
    margin-bottom:3vh;
    line-height:.8rem;
  }

  li {
    font-size:.57rem;
    font-weight:100;
    margin-bottom:5px;
    a {
      color:#383838;
      text-decoration:none;
      border-bottom:.5px solid gray;
      &:hover {
        color:black;
      }
    }
  }
`;
