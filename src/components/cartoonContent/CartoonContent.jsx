import React, { useRef, useEffect } from "react";
import * as Styled from "./CartoonContent.style";
import { useDispatch } from "react-redux";
import { slider } from "../../store/cartoonReducer";

function CartoonContent({ content }) {
  const contentRef = useRef();
  const boundingRef = useRef();

  const dispatch = useDispatch();

  let timer = null;

  const throttle = (func, time) => (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func(...args);
      }, time);
    }
  };

  const imageScrollHandeler = throttle(() => {
    boundingRef.current = contentRef.current.getBoundingClientRect();
    if (
      boundingRef.current.top < window.innerHeight * 0.7 &&
      boundingRef.current.top > window.innerHeight * 0.6
    ) {
      dispatch(slider({ id: 3 }));
    }
  }, 100);

  useEffect(function () {
    window.addEventListener("scroll", imageScrollHandeler);
    return () => {
      window.removeEventListener("scroll", imageScrollHandeler);
    };
  }, []);

  return (
    <>
      <Styled.ContentContainer ref={contentRef}>
        <Styled.Content>{content}</Styled.Content>
      </Styled.ContentContainer>
    </>
  );
}

export default CartoonContent;
