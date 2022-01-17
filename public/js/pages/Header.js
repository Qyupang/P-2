// 헤더 html 추가 및 버튼 기능 활성화
import createButton from "./Button.js";

const $ = document;

export default function Header(root) {
  const header = $.createElement("header");
  header.innerHTML = `<i class="fas fa-bars main-header__menu click" ></i>
  <span class="click main-header__home" >아주대 직방</span>
  <span class="click main-header__login" >Log in</span>`;
  root.appendChild(header);

  const headerButtons = ["main-header__home", "main-header__login"];

  createButtons(headerButtons);
}

function createButtons(buttonNames) {
  buttonNames.forEach((buttonName) => {
    createButton(buttonName);
  });
}
