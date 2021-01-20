import React from "react";
import * as Styled from "./CartoonImage.style";

function CartoonImage({ image, displayImage }) {
  return (
    <>
      <Styled.PicContainer displayImage={displayImage}>
        <Styled.Image src={image}></Styled.Image>
      </Styled.PicContainer>
    </>
  );
}

export default CartoonImage;
