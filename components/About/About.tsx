import * as Styled from "./About.style";

const About = () => {
  return (
    <Styled.Container>
      <Styled.Top>
        <h1>
          안녕하십니까! 읽기좋은 코드를 짜기위해서 항상 고민하는 주니어 개발자
          이경준입니다.
        </h1>
        <h2>
          개발 공부를 하기 전 호텔서비스업에서 근무 하였으며, 4년제 영어학과를
          졸업하였습니다. 어떻게하면 하루의 가장 긴시간을 보내는 직장에서
          성취감과 재미라는 두마리의 토끼를 잡을수 있을까라는 고민이 웹이라는
          분야에 관심을 갖게 만들었으며, 관심에서 끝나지 않기 위해서 새로운
          도전을 하게되었습니다.
        </h2>
      </Styled.Top>
      <Styled.Bottom>
        <Styled.IsImage src='/images/image.jpg' alt='my photo' />
        <Styled.Inform>
          <h3>
            평소 사소한 기능 하나하나를 구현해낼때 다른 직무에서 느낄수 없었던
            큰 성취감에 더욱 더 노력하게되고, 재사용가능한 코드의 로직에 항상
            의문을 갖고 알아가며 마법처럼 그냥 이루어지는게 아닌 결과에 대한
            이유를 알아가는데에 의미를 두고 학습하고 있습니다. 협업 프로젝트를
            하면서 겪게되는 예상치못한 버그들이 종종 스트레스를 주지만
            해결하기위한 집념은 누구보다 강하다고 생각합니다. 최신기술
            트렌드에관한 블로그 글을 읽는것을 좋아하며, 미래의 프론트엔드
            개발자로서 동료들에게 지식을 공유할수있는 시니어개발자가 되는 꿈을
            품고 있습니다. 동료들과의 원활한 소통으로 완성도있는 결과물을 함께
            만들어가는 개발자가 되고싶습니다.
          </h3>
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
};

export default About;
