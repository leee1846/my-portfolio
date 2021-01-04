import React, { useState } from "react";

function IntroContents() {
  const texts = [
    {
      text:
        "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
    },
    {
      text:
        "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
    },
    {
      text:
        "어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구",
    },
  ];

  const [introContents, setIntroContents] = useState(texts);

  const contents = introContents.map((content, idx) => (
    <li key={idx} className='cartoon-content'>
      <p>{content.text}</p>
    </li>
  ));

  return <ul className='cartoon-contents'>{contents}</ul>;
}

export default IntroContents;
