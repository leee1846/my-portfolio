import React, { useState } from "react";

function AboutMe() {
  const aboutMeData = [
    {
      title: "룰라룰라라 나눈누ㅜ나나나나나나",
      text:
        "룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라",
    },
    {
      title: "룰라룰라라 나눈누ㅜ나나나나나나",
      text:
        "룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라",
    },
    {
      title: "룰라룰라라 나눈누ㅜ나나나나나나",
      text:
        "룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나 룰라룰라라나눈누ㅜ나나나나나나룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라나눈누ㅜ나나나나나나 룰라룰라라 나눈누ㅜ나나나나나나룰라룰라라",
    },
  ];

  const [aboutMe, setAboutMe] = useState(aboutMeData);

  const aboutMyself = aboutMe.map((info) => (
    <div class='cover-letter-content'>
      <h2>{info.title}</h2>
      <p>{info.text}</p>
    </div>
  ));

  return <>{aboutMyself}</>;
}

export default AboutMe;