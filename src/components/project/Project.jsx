import React from "react";
import * as Styled from "./Project.style";
import todo from "../../images/todo.jpg";
import design1 from "../../images/design1.jpg";
import design2 from "../../images/design2.jpg";

const projectData = [
  {
    id: 1,
    image: todo,
    title: "Technology-specific-todoApp",
    content:
      "front-end에 필수적인 기술들을 단계별로 학습해가며 기술별로 todoApp을 업그레이드 시켜보았습니다. branch별로 나누어서 구성하였으며, 기술컨셉은 4가지 입니다.",
    concept: [
      "-varnilla-javascript",
      "-varnilla-javascript-refactoring",
      "-varnilla-javascript-webpack",
      "-react.js",
    ],
    githubUrl: "https://github.com/leee1846/Technology-specific-todoApp",
    githubContent: "github.com/leee1846/Technology-specific-todoApp",
  },
  {
    id: 2,
    image: design1,
    title: "경기도 슬로건 디자인 공모전",
    content:
      "2020년 07월에 진행했던 경기도 슬로건 공모전에 지원했던 디자인입니다. 모든 청년들이 꿈을 펼치기 위하여 노력할 수 있게 환경을 제공하도록 노력하는 경기도라는 의미를 담아서 디자인 하였습니다.",
    concept: ["-Adobe photoshop", "-Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
    githubContent: "velog.io/@kyungjune",
  },
  {
    id: 3,
    image: design2,
    title: "경기도 슬로건 디자인 공모전",
    content:
      "2020년 07월에 진행했던 경기도 슬로건 공모전에 지원했던 디자인입니다. 새로운 도시로 새로태어난다는 의미로 the new라는 단어를 넣었으며 'the'라는 글자에 아파트 그림을 넣어서 살기좋은 도시를 표현하고 싶었습니다. 뒷 배경은 느낌표를 변형하여 자신감을 강조하였습니다.",
    concept: ["-Adobe photoshop", "-Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EB%91%90%EB%B2%88%EC%A7%B8-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
    githubContent: "velog.io/@kyungjune",
  },
];

function Project() {
  return (
    <Styled.Container>
      {projectData.map((project) => {
        return (
          <>
            <Styled.Project key={project.id}>
              <Styled.ImageBox>
                <Styled.Img src={project.image} alt='' />
              </Styled.ImageBox>
              <Styled.Title>{project.title}</Styled.Title>
              <Styled.Content>
                {project.content}
                <ul>
                  {project.concept.map((list) => (
                    <li>{list}</li>
                  ))}
                </ul>
              </Styled.Content>
              <Styled.Github href={project.githubUrl}>
                {project.githubContent}
              </Styled.Github>
            </Styled.Project>
          </>
        );
      })}
    </Styled.Container>
  );
}

export default Project;
