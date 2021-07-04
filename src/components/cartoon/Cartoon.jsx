import React from "react";
import * as Styled from "./Cartoon.style";
import CartoonContent from "../cartoonContent/CartoonContent";
import CartoonImage from "../cartoonImage/CartoonImage";
import { useSelector } from "react-redux";

function Cartoon() {
  const cartoonReducer = useSelector((state) => state.cartoonReducer);

  return (
    <>
      <Styled.Section>
        <Styled.ImageContainer>
          {cartoonReducer.map((data) => (
            <CartoonImage
              key={data.id}
              image={data.pic}
              displayImage={data.displayImage}
            />
          ))}
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          {cartoonReducer.map((data, index) => {
            return (
              <CartoonContent
                key={data.id}
                content={data.content}
                contentShown={data.displayImage}
                cartoonReducer={cartoonReducer}
                index={index}
              />
            );
          })}
        </Styled.ContentContainer>
      </Styled.Section>
    </>
  );
}

export default Cartoon;
