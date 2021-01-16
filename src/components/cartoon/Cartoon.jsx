import React from "react";
import * as Styled from "./Cartoon.style";
import image1 from "../../images/pic1.jpg";
import image2 from "../../images/pic2.jpg";
import image3 from "../../images/pic3.jpg";

function Cartoon() {
  const imageData = [
    {
      pic: image1,
      display: true,
    },
    {
      pic: image2,
      display: false,
    },
    {
      pic: image3,
      display: false,
    },
  ];

  return (
    <Styled.Section>
      {imageData.map((data) => (
        <Styled.Image src={data.pic} display={data.display}></Styled.Image>
      ))}
    </Styled.Section>
  );
}

export default Cartoon;
