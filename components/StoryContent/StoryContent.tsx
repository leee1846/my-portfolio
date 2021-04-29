import { useEffect, useRef, useState } from "react";
import * as Styled from "./StoryContent.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/rootReducer";
import { slider } from "../../stores/cartoons/cartoonsReducer";

type StoryContentType = {
  content: string;
  index: number;
};

const StoryContent: React.FC<StoryContentType> = ({ content, index }) => {
  const contentRef = useRef(null);
  const boundingRef = useRef(null);
  const [contentIndex, setContentIndex] = useState(index);
  const dispatch = useDispatch<AppDispatch>();

  const imageScrollHandeler = (): void => {
    boundingRef.current = contentRef.current.getBoundingClientRect();
    if (
      boundingRef.current.top < window.innerHeight * 0.5 &&
      boundingRef.current.top > window.innerHeight * 0.4
    ) {
      dispatch(slider({ id: contentIndex + 1 }));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", imageScrollHandeler);
    return () => {
      window.removeEventListener("scroll", imageScrollHandeler);
    };
  }, []);

  return (
    <Styled.ContentContainer ref={contentRef}>
      <Styled.Content>{content}</Styled.Content>
    </Styled.ContentContainer>
  );
};

export default StoryContent;
