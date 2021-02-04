import React from "react";
import * as Styled from "./About.style";
import image from "../../images/image.jpg";

function About() {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>
          안녕하십니까! 작은 버그들이 고쳐지고 구현될때 가장 큰 희열을 느끼는
          주니어 개발자 이경준입니다
        </h1>
        <p>
          개발 공부를 하기 전 호텔서비스업에서 근무 하였으며, 4년제 영어학과를
          졸업하였습니다. 웹디자인에대한 관심에서 시작하여 UI/UX라는 분야를 알게
          되었고 관심에서 끝나지 않기 위하여 새로운 도전을 하게 되었습니다.
        </p>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.Image src={image} />
        <Styled.Inform>
          <p>
            UI/UX에대한 기술적관심과 디자인에 항상 의문을 갖고 알아가기 위하여
            노력하고 있습니다. 평소 기능 하나하나를 구현해낼때의 성취감에 더욱
            더 노력하게되고, 마법처럼 그냥 이루어지는게 아닌 결과에 대한 이유를
            알아가는데에 의미를 두고 학습하고 있습니다. 경험은 많지 않지만
            프로젝트들을 해가면서 협업과 해보지 않은 개발과정에 욕심이 생겼으며,
            모두가 읽기 쉬운 코드작성을 위하여 노력하고 있습니다. 경험이
            부족하지만 배움에 대한 욕심이 있고 최종적으로는 프론트엔드
            개발자로서 동료들에게 도움을 줄수있는 시니어가 되는 것을 꿈꾸고
            있습니다. 개발자는 동료간의 소통과 결과물의 서비스가 굉장히
            중요하다고 생각합니다. 중요하다는 생각에서 끝나지 않고 학습하고
            노력하여 계속해서 성장하는 개발자가 되고싶습니다.
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
