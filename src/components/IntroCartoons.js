import React, { useState } from "react";
import image1 from "../images/미니언즈1.jpg";
import image2 from "../images/미니언즈2.jpg";
import image3 from "../images/미니언즈3.jpg";

function IntroCartoons() {
  const images = [image1, image2, image3];
  const [introImage, setIntroImage] = useState(images);

  const cartoons = introImage.map((pic, idx) => (
    <li key={idx} className='invisible-cartoon'>
      <img src={pic} alt='' />
    </li>
  ));

  return <ul className='cartoon-pictures'>{cartoons}</ul>;
}

export default IntroCartoons;
