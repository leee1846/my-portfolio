import React from "react";
import * as Styled from "./About.style";
import image from "../../assets/images/image.jpg";

function About() {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>
          안녕하십니까! 클린코드에 관심이 많은 프론트엔드 개발자 이경준 입니다.
        </h1>
        <p>
          다양한 사람들과 협업하면서 고민하는 것을 좋아합니다.
          동료들과 함께 고민하고 질문을 주고받다보면 클린코드에대한 고민을 한 코드는 협업시에 큰 도움이 되었습니다.
        </p>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Image src={image} />
        <Styled.Inform>
          <p>
            시간이 지나고 알아보기힘든 변수명들을 보면서 얼마나 고민을하지않고 코드를 짜왔는지에 대한 후회를 자주 했습니다.
            클린코드는 사람마다 추구하는 방법이 다르겠지만, 확실한 변수명과 함수의 간결한 기능은 동료와의 의견을 주고받을때 더 빠른 피드백을 받을수 있었습니다. 과거에 힘들고 귀찮아서 넘어갔던 사소한 부분들이 오히려 더 많은 시간을 아끼게 해줍니다.
            다양한 이유들로 하여금 모두가 동의하는 클린코드방법에대해서 고민을 하는편입니다.
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
