import Styled from "styled-components";

export const ContentContainer = Styled.li`
  margin: 0 110px;
  margin-bottom: 80vh;
  max-width: 500px;
  background-color: ${({show}) => show ? "#e3e8ffea" : "#e3e8ff1d"};
  color: ${({show}) => !show && "#e3e8ff1d"};
  padding: 20px 15px;
  border-radius: 10px;
  transition:  .1s;
  @media (max-width:767px){
    margin: 0 40px 70vh;
  }
`;

export const Content = Styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.2rem;
`;
