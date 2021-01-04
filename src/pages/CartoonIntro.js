import React, { useState } from "react";
import IntroCartoons from "../components/IntroCartoons";
import IntroContents from "../components/IntroContents";
import { introTexts, introImages } from "../components/introData";

function CartoonIntro() {
  const [introContents, setIntroContents] = useState(introTexts);
  const [introImage, setIntroImage] = useState(introImages);
  const [boundingRect, setBoundingRect] = useState("");

  const cartoons = introImage.map((pic, idx) => (
    <li key={idx} className='invisible-cartoon'>
      <img src={pic} alt='' />
    </li>
  ));

  const contents = introContents.map((content, idx) => (
    <li key={idx} className='cartoon-content'>
      <p>{content.text}</p>
    </li>
  ));

  return (
    <section className='cartoon-introduction'>
      <h1>신입 개발자의 하루</h1>
      <IntroCartoons cartoons={cartoons} />
      <IntroContents contents={contents} />
    </section>
  );
}

export default CartoonIntro;
