import Styled from "styled-components";

export const ContentContainer = Styled.li`
  margin: 0 110px;
  margin-bottom: 70vh;
  max-width: 500px;
  background-color: #e3e8ffea;
  padding: 20px 15px;
  border-radius: 10px;
  @media (max-width:767px){
    margin: 0 40px 70vh;
  }
`;

export const Content = Styled.p`
  /* color:white; */
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2rem;
`;
