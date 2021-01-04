import React from "react";
import AboutMe from "./AboutMe";
import MyInformation from "./MyInformation";

function CoverLetterContent() {
  return (
    <aside class='cover-letter-right'>
      <div class='cover-letter-contents'>
        <AboutMe />
        <MyInformation />
      </div>
    </aside>
  );
}

export default CoverLetterContent;
