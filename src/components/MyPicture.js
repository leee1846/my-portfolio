import React from "react";
import pic from "../images/미니언즈1.jpg";

function MyPicture() {
  return (
    <article class='cover-letter-left'>
      <div class='my-picture'>
        <img src={pic} alt='' />
      </div>
    </article>
  );
}

export default MyPicture;
