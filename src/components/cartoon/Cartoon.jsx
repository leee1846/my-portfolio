import React, { useState, useRef } from "react";
import * as Styled from "./Cartoon.style";
import image1 from "../../images/pic1.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";
import CartoonContent from "../cartoonContent/CartoonContent";
import CartoonImage from "../cartoonImage/CartoonImage";

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
  const [dataList, setDataList] = useState(imageData);

  return (
    <>
      <Styled.Section>
        <Styled.ImageContainer>
          {dataList.map((data) => (
            <CartoonImage image={data.pic} display={data.display} />
          ))}
        </Styled.ImageContainer>
        <Styled.ContentContainer>
          {dataList.map((data) => (
            <CartoonContent content={data.content} />
          ))}
        </Styled.ContentContainer>
      </Styled.Section>
    </>
  );
}

export default Cartoon;
