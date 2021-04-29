import Styled from "styled-components";

export const Container = Styled.section`
  margin:120px auto;
  display:flex;
  flex-direction:column;
  @media ${({ theme }) => theme.device.tablet}{
    margin:80px auto;
  }
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
  h2 {
    width:32%;
    font-size:20px;
    line-height:40px;
  }
  @media ${({ theme }) => theme.device.tablet}{
    flex-direction:column;
    margin-bottom:10vh;
    h1 {
      width:90%;
      margin:0 auto;
      margin-bottom:70px;
      font-size:28px;
    }
    h2 {
      width:90%;
      margin:0 auto;
      font-size:18px;
      line-height:32px;
    }
  }
`;

export const Bottom = Styled.div`
  display:flex;
  width:100%;
  @media ${({ theme }) => theme.device.tablet}{
    flex-direction:column;
  }
`;

export const IsImage = Styled.img`
  width: 50%;
  margin-right:13%;
  height:50vh;
  object-fit:cover;
  @media ${({ theme }) => theme.device.tablet}{
    width:90%;
    margin:0 auto 10vh;
  }
`;

export const Inform = Styled.ul`
  width:32%;
  h3 {
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
  @media ${({ theme }) => theme.device.tablet}{
    width:90%;
    margin:0 auto;
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
