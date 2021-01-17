import React, { Fragment, useRef, useState } from "react";
import * as Styled from "./Cartoon.style";
import image1 from "../../images/pic1.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";

const imageData = [
  {
    id: 1,
    pic: image1,
    display: "true",
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 2,
    pic: image2,
    display: "",
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
  {
    id: 3,
    pic: image3,
    display: "",
    content:
      "하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루하이루",
  },
];

function Cartoon() {
  const contentElem = useRef([]);
  const imageElem = useRef([]);
  const [dataList, setDataList] = useState(imageData);

  const dataMap = dataList.map((data) => {
    return (
      <Fragment key={data.id}>
        <Styled.PicContainer>
          <Styled.Image
            src={data.pic}
            display={data.display}
            ref={(ref) => imageElem.current.push(ref)}
          ></Styled.Image>
        </Styled.PicContainer>
        <Styled.ContentContainer>
          <Styled.Content ref={(ref) => contentElem.current.push(ref)}>
            <p>{data.content}</p>
          </Styled.Content>
        </Styled.ContentContainer>
      </Fragment>
    );
  });

  window.addEventListener("scroll", () => {
    contentElem.current.forEach((content, idx) => {
      const boundingRect = content.getBoundingClientRect();

      if (
        boundingRect.top < window.innerHeight * 0.5 &&
        boundingRect.top > window.innerHeight * 0.4
      ) {
        // setDataList((dataList) => (dataList[idx].display = ""));
        // setDataList(dataList);
      }
    });
  });

  return (
    <>
      <Styled.Section>{dataMap}</Styled.Section>
    </>
  );
}

export default Cartoon;
