import React, { useState } from "react";
import * as Styled from "./Cartoon.style";
import image1 from "../../images/pic1.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";
import CartoonItem from "../cartoonItem/CartoonItem";

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
  const [dataList, setDataList] = useState(imageData);

  return (
    <>
      <Styled.Section>
        {dataList.map((data) => (
          <CartoonItem
            key={data.id}
            pic={data.pic}
            display={data.display}
            content={data.content}
          />
        ))}
      </Styled.Section>
    </>
  );
}

export default Cartoon;
