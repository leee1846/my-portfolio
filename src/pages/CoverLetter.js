import React from "react";
import MyPicture from "./../components/MyPicture";
import CoverLetterContent from "./../components/CoverLetterContent";

function CoverLetter() {
  return (
    <section class='cover-letter'>
      <MyPicture />
      <CoverLetterContent />
    </section>
  );
}

export default CoverLetter;
