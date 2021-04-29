import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type projectsType = {
  id: number;
  image: string;
  title: string;
  content: string;
  concept: string[];
  githubUrl: string;
  githubContent: string;
};

const initialState: projectsType[] = [
  {
    id: 1,
    image: "/images/ing.jpg",
    title: "BbangDuck",
    content: "방탈출 카페를 주제로한 사이드프로젝트를 진행중입니다...",
    concept: [
      "react.js",
      "typescript",
      "swr",
      "react-router-dom",
      "styled-components",
    ],
    githubUrl: "https://github.com/bbangduck/client",
    githubContent: "github.com/bbangduck/client",
  },
  {
    id: 2,
    image: "/images/todo.jpg",
    title: "Technology-specific-todoApp",
    content:
      "front-end 필수기술들을 단계별로 학습해가며 기술별로 todoList App을 업그레이드 시켜보았습니다. branch별로 나누어서 구성하였으며, 기술컨셉은 4가지 입니다.",
    concept: [
      "varnilla-javascript",
      "varnilla-javascript-refactoring",
      "varnilla-javascript-webpack",
      "react.js",
    ],
    githubUrl: "https://github.com/leee1846/Technology-specific-todoApp",
    githubContent: "github.com/leee1846/Technology-specific-todoApp",
  },
  {
    id: 3,
    image: "/images/portfolio.jpg",
    title: "portfolio",
    content:
      '포트폴리오를 React,js로 직접 제작해 보았습니다. "my story", "about me", "project" 섹션으로 나누어 저의 소개를 해보았습니다. SPA을 구현하기 위하여 react-router-dom을 사용하였으며, styled-components로 스타일을 구현하였습니다.',
    concept: ["React.js", "redux/toolkit", "styled-components"],
    githubUrl: "https://github.com/leee1846/portfolio-react",
    githubContent: "github.com/leee1846/portfolio-react",
  },
  {
    id: 4,
    image: "/images/design1.jpg",
    title: "경기도 슬로건 디자인 공모전",
    content:
      "2020년 07월에 진행했던 경기도 슬로건 공모전에 지원했던 디자인입니다. 모든 청년들이 꿈을 펼치기 위하여 노력할 수 있게 환경을 제공하도록 노력하는 경기도라는 의미를 담아서 디자인 하였습니다.",
    concept: ["Adobe photoshop", "Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
    githubContent: "velog.io/@kyungjune",
  },
  {
    id: 5,
    image: "/images/design2.jpg",
    title: "경기도 슬로건 디자인 공모전",
    content:
      "2020년 07월에 진행했던 경기도 슬로건 공모전에 지원했던 디자인입니다. 새로운 도시로 새로태어난다는 의미로 the new라는 단어를 넣었으며 'the'라는 글자에 아파트 그림을 넣어서 살기좋은 도시를 표현하고 싶었습니다. 뒷 배경은 느낌표를 변형하여 자신감을 강조하였습니다.",
    concept: ["Adobe photoshop", "Adobe illustrator"],
    githubUrl:
      "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EB%91%90%EB%B2%88%EC%A7%B8-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
    githubContent: "velog.io/@kyungjune",
  },
];

export const projectsReducer = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export const {} = projectsReducer.actions;
export default projectsReducer.reducer;
