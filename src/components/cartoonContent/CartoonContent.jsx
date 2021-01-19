import React, { useRef, useEffect } from "react";
import * as Styled from "./CartoonContent.style";

function CartoonContent({ display, content }) {
  // let timer = null;
  const contentRef = useRef();

  // const imageDisplayHandeler = () => {
  //   setDataList((dataList) =>
  //     dataList.map((list) => {
  //       return { ...list, display: false };
  //     })
  //   );
  // };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const boundingRect = contentRef.current.getBoundingClientRect();
      if (
        boundingRect.top < window.innerHeight * 0.7 &&
        boundingRect.top > window.innerHeight * 0.6
      ) {
        // display = true;
        console.log(display);
      }
    });
  });

  return (
    <>
      <Styled.ContentContainer ref={contentRef}>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentContainer>
    </>
  );
}

export default CartoonContent;
