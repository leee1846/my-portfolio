import React, { useRef } from "react";
import * as Styled from "./CartoonImage.style";

function CartoonImage({ image, display }) {
  const imageRef = useRef();

  return (
    <>
      <Styled.PicContainer ref={imageRef} display={display}>
        <Styled.Image src={image}></Styled.Image>
      </Styled.PicContainer>
    </>
  );
}

export default CartoonImage;
