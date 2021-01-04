import React from "react";
import IntroCartoons from "../components/IntroCartoons";
import IntroContents from "../components/IntroContents";

function CartoonIntro() {
  return (
    <section className='cartoon-introduction'>
      <h1>신입 개발자의 하루</h1>
      <IntroCartoons />
      <IntroContents />
    </section>
  );
}

export default CartoonIntro;
