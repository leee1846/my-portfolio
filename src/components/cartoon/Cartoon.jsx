import React, { useRef } from "react";
import * as Styled from "./Cartoon.style";
import image1 from "../../images/pic1.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";

const imageData = [
  {
    id: 1,
    pic: image1,
    display: true,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 2,
    pic: image2,
    display: false,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 3,
    pic: image3,
    display: false,
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
];

function Cartoon() {
  const contentElem = useRef([]);
  const imageElem = useRef([]);

  window.addEventListener("scroll", () => {
    contentElem.current.forEach((image, idx) => {
      const boundingRect = image.getBoundingClientRect();
      if (
        boundingRect.top < window.innerHeight * 0.5 &&
        boundingRect.top > window.innerHeight * 0.4
      ) {
        // imageElem[idx];
      }
    });
  });

  return (
    <>
      <Styled.Section>
        <Styled.PicContainer>
          {imageData.map((data) => (
            <Styled.Image
              key={data.id}
              src={data.pic}
              display={data.display}
              ref={(ref) => imageElem.current.push(ref)}
            ></Styled.Image>
          ))}
        </Styled.PicContainer>
        <Styled.ContentContainer>
          {imageData.map((data) => (
            <Styled.Content
              key={data.id}
              ref={(ref) => contentElem.current.push(ref)}
            >
              <p>{data.content}</p>
            </Styled.Content>
          ))}
        </Styled.ContentContainer>
      </Styled.Section>
    </>
  );
}

export default Cartoon;
