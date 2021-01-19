import React from "react";
import * as Styled from "./CartoonItem.style";

function CartoonItem({ pic, display, content }) {
  // window.addEventListener("scroll", () => {
  //   contentElem.current.forEach((content, idx) => {
  //     const boundingRect = content.getBoundingClientRect();

  //     if (
  //       boundingRect.top < window.innerHeight * 0.5 &&
  //       boundingRect.top > window.innerHeight * 0.4
  //     ) {
  //       // setDataList((dataList) => (dataList[idx].display = ""));
  //       // setDataList(dataList);
  //     }
  //   });
  // });

  return (
    <>
      <Styled.PicContainer>
        <Styled.Image src={pic} display={display}></Styled.Image>
      </Styled.PicContainer>
      <Styled.ContentContainer>
        <Styled.Content>
          <p>{content}</p>
        </Styled.Content>
      </Styled.ContentContainer>
    </>
  );
}

export default CartoonItem;
