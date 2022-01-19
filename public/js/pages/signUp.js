const $ = document;

export default function signUp() {
  const signUp = $.createElement("div");

  signUp.innerHTML = `
  <div class="signUp-box">
    <h1> 회원가입 </h1>
    <form action="login" method="post">
    ID: <input id="id" class="signUp-page__input" type="text" name="id" placeholder="아이디를 입력해주세요.">
    Password: <input id="password" class="signUp-page__input" type="password" name="passwd" placeholder="비밀번호를 입력해주세요.">
    Location: <input id="location" class="signUp-page__input" name="location" placeholder="지역을 입력해주세요.">
    <div class="signUp-btn-box">
    <input type="button" class="signUp-exit__btn signUp-page__input click" value="나가기">
    <input type="submit" class="signUp-signUp__btn signUp-page__input click" value="회원가입" >
    </div>
    </form>
    </div>
        `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }

  signUp.classList.add("main-signUp__page", "replace");
  root.appendChild(signUp);

  function makeButton(purpose) {
    // exit 이면 뒤로가기
    if (purpose === "exit") {
      const exit = $.querySelector(".signUp-exit__btn");
      exit.addEventListener("click", () => history.go(-1));
      // 회원가입이면 환영 문자 띄우기
    } else {
      const signUp = $.querySelector(".signUp-signUp__btn");

      signUp.addEventListener("click", function () {
        alert(`회원가입을 축하합니다!! 다시 로그인 해주세요`);
        // history.go(-1);
      });
    }
  }
  makeButton("exit");
  makeButton("sign-up");
}
