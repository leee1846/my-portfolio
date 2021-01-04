import React, { useState } from "react";
import html from "../images/html.png";
import scss from "../images/scss.png";
import javascript from "../images/js.png";
import typescript from "../images/ts.png";
import webpack from "../images/webpack.png";
import react from "../images/react.png";
import photoshop from "../images/photoshop.png";
import illust from "../images/illust.png";

function Project() {
  const ProjectDatas = [
    {
      title: "현재 포트폴리오 페이지 1",
      content:
        "현재 포트폴리오 페이지를 순수 자바스크립트와 webpack을 이용하여 구성해보았습니다. 하단 링크를 클릭하시면 github에서 코드확인이 가능합니다.",
      techs: [javascript, scss, webpack],
      link: "https://github.com/leee1846/portfolio",
      iconName: "fab fa-github",
    },
    {
      title: "현재 포트폴리오 페이지 2",
      content:
        "현재 포트폴리오 페이지를 react.js를 이용하여 구성해보았습니다. 하단 링크를 클릭하시면 github에서 코드확인이 가능합니다.",
      techs: [scss, react],
      link: "https://github.com/leee1846/portfolio-react-version",
      iconName: "fab fa-github",
    },
    {
      title: "기술별 todoList",
      content:
        "CRUD 시스템의 가장 기본적인 투두리스트입니다. vanilla   Javascript부터모듈시스템, webpack, react(typescript)를 브런치별로 나눠서 제작하였으며, 깃허브에서 단계별로 코드체크가 가능합니다.",
      techs: [html, scss, javascript, typescript, webpack, react],
      link: "https://github.com/leee1846/toDoList",
      iconName: "fab fa-github",
    },
    {
      title: "????? 클론 프로젝트",
      content:
        "CRUD 시스템의 가장 기본적인 투두리스트입니다. vanilla   Javascript부터모듈시스템, webpack, react(typescript)를 브런치별로 나눠서 제작하였으며, 깃허브에서 단계별로 코드체크가 가능합니다.",
      techs: [typescript, react],
      link: "https://github.com/leee1846/toDoList",
      iconName: "fab fa-github",
    },
    {
      title: "경기도 슬로건 공모전 1",
      content:
        "2020.07.01 ~ 2020.07.26에 진행하였던 경기도 슬로건 공모전에 맞추어 디자인을 제출하였습니다.",
      techs: [photoshop, illust],
      link:
        "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
      iconName: "fas fa-blog",
    },
    {
      title: "경기도 슬로건 공모전 2",
      content:
        "2020.07.01 ~ 2020.07.26에 진행하였던 경기도 슬로건 공모전에 맞추어 디자인을 제출하였습니다.",
      techs: [photoshop, illust],
      link:
        "https://velog.io/@kyungjune/%EA%B2%BD%EA%B8%B0%EB%8F%84-%EC%8A%AC%EB%A1%9C%EA%B1%B4-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%8F%84%EC%A0%84-%EB%96%A8%EC%96%B4%EC%A7%90",
      iconName: "fas fa-blog",
    },
  ];

  const [projectData, setProjectData] = useState(ProjectDatas);

  const projectList = projectData.map((data, idx) => (
    <li key={idx} className='project-list'>
      <h5>{data.title}</h5>
      <p className='project-content'>{data.content}</p>
      <p className='tech'>Tech</p>
      <ul className='tech-list'>
        {data.techs.map((tech) => (
          <li>
            <img src={tech} alt='' />
          </li>
        ))}
      </ul>
      <a href={data.link}>
        <i className={data.iconName}></i>
        <span>링크</span>
      </a>
    </li>
  ));

  return <>{projectList}</>;
}

export default Project;
