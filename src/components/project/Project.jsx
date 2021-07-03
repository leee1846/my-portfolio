import React from "react";
import * as Styled from "./Project.style";
import todo from "../../assets/images/todo.jpg";
import design1 from "../../assets/images/design1.jpg";
import design2 from "../../assets/images/design2.jpg";
import portfolio from "../../assets/images/portfolio.jpg";
import ing from "../../assets/images/ing.jpg";

const projectData = [
  {
    id: 1,
    image: ing,
    title: "BbangDuck (2021.04.01 ~ 진행중)",
    content: "빵덕서비스는 업체에서 제공하는 장르와 테마가아닌 사용자가 직접 느낀 장르와 테마를 취합하여 제공할수 있도록 노력합니다. 또한 사용자들이 서로 느낀 정보를 공유하고, 본인만의 능력치를 키워나가며 재미를 느낄수 있는 커뮤니티를 서비스 합니다.",
    concept: [
      "React",
      "typescript",
      "swr",
      "redux",
      "react-router",
      "styled-components",
    ],
    githubUrl: "https://github.com/bbangduck/client",
  },
  {
    id: 2,
    image: portfolio,
    title: "portfolio (2021.01.19 ~ 2021.02.05)",
    content:
      "포트폴리오를 react를 사용하여 제작해보았습니다. 'my story', 'about me', 'project' 3가지 페이지로 구성되어있으며, 심플한 UI에 집중하였습니다.",
    concept: ["React.js", "redux/toolkit", "styled-components"],
    githubUrl: "https://github.com/leee1846/portfolio-react",
  },
  {
    id: 3,
    image: todo,
    title: "Technology-specific-todoApp (2020.12.09 ~ 2021.03.06)",
    content:
      "4개의 컨셉으로 투두리스트를 만들어보았습니다. 같은 프로젝트를 컨셉별로 학습하면서 구현하고자 노력하였으며, 최종적으로 react로 완성하였습니다. 최종 react브랜치에서는 kakao로그인과 드래그앤드랍기능을 추가하였습니다.",
    concept: [
      "varnilla-javascript",
      "varnilla-javascript-refactoring",
      "varnilla-javascript-webpack",
      "react.js",
    ],
    githubUrl: "https://github.com/leee1846/Technology-specific-todoApp",
  },
  {
    id: 4,
    image: design1,
    title: "경기도 슬로건 디자인 공모전 (2020.07.09)",
    content:
      "경기도 슬로건 공모전에 지원했던 로고디자인입니다. 모든 청년들이 꿈을 펼치기 위한환경을 제공하도록 노력하는 경기도라는 의미를 담아서 디자인 하였습니다.",
    concept: ["Adobe photoshop", "Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
  },
  {
    id: 5,
    image: design2,
    title: "경기도 슬로건 디자인 공모전 (2020.07.09)",
    content:
      "경기도 슬로건 공모전에 지원했던 2번째 로고디자인입니다. 새로운 도시로 새로태어난다는 의미로 the new라는 단어를 넣었으며 'the'라는 글자에 아파트 그림을 넣어서 살기좋은 도시를 표현하고 싶었습니다. 뒷 배경은 느낌표를 변형하여 자신감을 강조하였습니다.",
    concept: ["Adobe photoshop", "Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EB%91%90%EB%B2%88%EC%A7%B8-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
  },
];

function Project() {
  return (
    <Styled.Container>
      {projectData.map((project) => {
        return (
          <Styled.Project key={project.id}>
            <Styled.ImageBox>
              <Styled.Img src={project.image} alt='' />
            </Styled.ImageBox>
            <Styled.Title>{project.title}</Styled.Title>
            <Styled.Content>
              {project.content}
            </Styled.Content>
            {project.concept.map((list, idx) => (
              <Styled.Content key={idx}>- {list}</Styled.Content>
            ))}
            <Styled.Github href={project.githubUrl}>
              자세히 보기
            </Styled.Github>
          </Styled.Project>
        );
      })}
    </Styled.Container>
  );
}

export default Project;
