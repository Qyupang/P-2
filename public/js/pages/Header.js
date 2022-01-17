// 헤더 html 추가 및 버튼 기능 활성화
// import createButton from "./Button.js";

const $ = document;

export default function Header(root) {
  const header = $.createElement("header");
  header.innerHTML = `<i class="fas fa-bars menu click" ></i>
  <span class="home click" >아주대 직방</span>
  <span class="login click" >Log in</span>`;
  root.appendChild(header);

  // const headerButtons = ["menu", "home", "login"];

  // createButtons(headerButtons);
}

// function createButtons(buttonNames) {
//   buttonNames.forEach((buttonName) => {
//     createButton(buttonName);
//   });
// }
