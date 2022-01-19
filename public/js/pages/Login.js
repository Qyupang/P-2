import createButton from "./Button.js";

const $ = document;

export default function Login(root) {
  const login = $.createElement("div");

  login.innerHTML = `
  <div class="login-box">
  <h1> Login Page </h1>
  <form action="signed/home" method="post">
  ID: <input class="login-page__input" id="id" type="text" name="id" placeholder="아이디를 입력해주세요.">
  Password: <input class="login-page__input" id="password" type="password" name="passwd" placeholder="비밀번호를 입력해주세요.">
  <div class="login-btn__box">
  <input type="button" class="login-signUp__btn click login-page__input sign-in" value="회원가입" >
  <input type="submit" class="login-login-btn click login-page__input login-btn" value="로그인">
  </div>
  </form>
</div>
      `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }
  const toBeReplacedNav = $.querySelector(".replace-on");
  if (toBeReplacedNav) {
    toBeReplacedNav.remove();
  }

  login.classList.add("main-login__page", "replace");
  root.appendChild(login);

  createButton("login-btn");
  createButton("login-signUp__btn");
}
