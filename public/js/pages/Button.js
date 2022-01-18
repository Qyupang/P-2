import Home from "./Home.js";
import Login from "./Login.js";
import SignUp from "./signUp.js";

const $ = document;

// 버튼 생성 및 해당 루트로 url 변경
export default function makeButton(purpose) {
  const button = $.querySelector(`.${purpose}`);
  button.addEventListener("click", () => moveToRoute(root, purpose));
}

// 해당 버튼에 따른 상호작용
function moveToRoute(root, purpose) {
  switch (purpose) {
    case "main-header__home":
      history.pushState({ data: "home" }, null, "home");
      Home(root);
      break;
    case "main-header__login":
      history.pushState({ data: "login" }, null, "login");
      Login(root);
      break;
    case "login-signUp__btn":
      history.pushState({ data: "sign-up" }, null, "sign-up");
      SignUp(root);
      break;
  }
}
