import React from "react";
import * as Styled from "./About.style";
import image from "../../images/image.jpg";

function About() {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>주니어 개발자 이경준 입니다.</h1>
        <p>
          주니어 개발자 이경준 입니다.주니어 개발자 이경준 입니다.주니어 개발자
          이경준 입니다. 주니어 개발자 이경준 입니다.주니어 개발자 이경준
          입니다.주니어 개발자 이경준 입니다. 주니어 개발자 이경준 입니다.주니어
          개발자 이경준 입니다.주니어 개발자 이경준 입니다.주니어 개발자 이경준
          입니다.주니어 개발자 이경준 입니다. 주니어 개발자 이경준 입니다.주니어
          개발자 이경준 입니다. 주니어 개발자 이경준 입니다.주니어 개발자 이경준
          입니다. 주니어 개발자 이경준 입니다.
        </p>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Image src={image} />
        <Styled.Inform>
          <p>
            주니어 개발자 이경준 입니다.주니어 개발자 이경준 입니다.주니어
            개발자 이경준 입니다. 주니어 개발자 이경준 입니다. 주니어 개발자
            이경준 입니다. 주니어 개발자 이경준 입니다. 주니어 개발자 이경준
            입니다. 주니어 개발자 이경준 입니다. 주니어 개발자 이경준 입니다.
            주니어 개발자 이경준 입니다. 주니어 개발자 이경준 입니다. 주니어
            개발자 이경준 입니다. 주니어 개발자 이경준 입니다.
          </p>
          <li>이 경 준</li>
          <li>010 - 7689 - 1846</li>
          <li>
            <a href='mailto:leee1846@gmail.com'>leee1846@gmail.com</a>
          </li>
          <li>
            <a href='https://github.com/leee1846'>github.com/leee1846</a>
          </li>
          <li>
            <a href='https://velog.io/@kyungjune'>velog.io/@kyungjune</a>
          </li>
        </Styled.Inform>
      </Styled.Bottom>
    </Styled.Container>
  );
}

export default About;
