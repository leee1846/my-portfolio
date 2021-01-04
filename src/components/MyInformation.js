import React from "react";

function MyInformation() {
  return (
    <div class='cover-letter-content'>
      <h3 class='greeting'>안녕하십니다!! 어쩌구 저쩌구 떙떙떙 입니다!!</h3>
      <ul class='contact-lists'>
        <li class='contact-list'>
          <i class='fas fa-signature'></i>
          <p class='name'>이경준</p>
        </li>
        <li class='contact-list'>
          <i class='fas fa-envelope'></i>
          <a href='mailto:Leee1846@gmail.com'>Leee1846@gmail.com</a>
        </li>
        <li class='contact-list'>
          <i class='fas fa-phone'></i>
          <p>010-7689-1846</p>
        </li>
        <li class='contact-list'>
          <i class='fab fa-github'></i>
          <a href='https://github.com/leee1846'>https://github.com/leee1846</a>
        </li>
        <li class='contact-list'>
          <i class='fas fa-blog'></i>
          <a href='https://velog.io/@kyungjune'>https://velog.io/@kyungjune</a>
        </li>
      </ul>
    </div>
  );
}

export default MyInformation;
