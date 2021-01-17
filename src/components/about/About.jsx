import React from "react";
import * as Styled from "./About.style";
import image from "../../images/image.jpg";

function About() {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>
          안녕하십니까! 읽기 쉬운 코드작성을 추구하는 주니어 개발자 이경준
          입니다.
        </h1>
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
            <Styled.Address href='mailto:leee1846@gmail.com'>
              leee1846@gmail.com
            </Styled.Address>
          </li>
          <li>
            <Styled.Address href='https://github.com/leee1846'>
              github.com/leee1846
            </Styled.Address>
          </li>
          <li>
            <Styled.Address href='https://velog.io/@kyungjune'>
              velog.io/@kyungjune
            </Styled.Address>
          </li>
        </Styled.Inform>
      </Styled.Bottom>
    </Styled.Container>
  );
}

export default About;
