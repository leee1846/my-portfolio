import Styled from "styled-components";

export const ContentContainer = Styled.li`
  margin: 0 110px;
  margin-bottom: 70vh;
  max-width: 500px;
  /* background-color: gray; */
  background-color: rgba(255, 255, 255, 0.733);
  padding: 20px 15px;
  border-radius: 10px;
  @media (max-width:767px){
    margin: 0 40px 70vh;
  }
`;

export const Content = Styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 0.9rem;
`;
