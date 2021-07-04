/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import * as Styled from "./CartoonContent.style";
import { useDispatch } from "react-redux";
import { slider } from "../../store/cartoonReducer";

function CartoonContent({ content, index,contentShown }) {
  const splittedContent = content.split('+')
  const contentRef = useRef();
  const [contentIndex, setContentIndex] = useState(index);

  const dispatch = useDispatch();

  let timer = null;

  const throttle = (func, time) => (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        func(...args);
        timer = null;
      }, time);
    }
  };

  const imageScrollHandeler = throttle(() => {
    const boundingRect = contentRef.current?.getBoundingClientRect();
    if (
      boundingRect &&
      boundingRect.top < window.innerHeight * 0.9 &&
      boundingRect.top > window.innerHeight * 0.1
      ) {
      dispatch(slider({ id: contentIndex + 1 }));
    }
  },400)

  useEffect(() => {
    window.addEventListener("scroll", imageScrollHandeler);
    return () => {
      window.removeEventListener("scroll", imageScrollHandeler);
    };
  }, []);
  
  return (
    <>
      <Styled.ContentContainer ref={contentRef} show={contentShown}>
        {
          splittedContent.map((content,idx) => <Styled.Content key={idx}>{content}</Styled.Content>)
        }
      </Styled.ContentContainer>
    </>
  );
}

export default CartoonContent;
