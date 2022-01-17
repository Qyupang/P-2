// // import Home from "./Home.js";
// // import ButtonReaction from "./popMenu.js";
// // import Post from "./Posts.js";
// // import Register from "./Register.js";
// // import Login from "./Login.js";
// // import Navigation from "./Navigation.js";
// // import handleMenuClick from "./menuSelect.js";
// // import signUp from "./signUp.js";
// // import pageLogin from "./pageLogin.js";
// // import write from "./Write.js";

// const $ = document;

// // 버튼 생성 및 해당 루트로 url 변경
// export default function makeButton(purpose) {
//   const button = $.querySelector(`.${purpose}`);
//   button.addEventListener("click", () => moveToRoute(root, purpose));
// }

// // 해당 버튼에 따른 상호작용
// function moveToRoute(root, purpose) {
//   // 메뉴 처리는 하지만 url에 추가 되는 것은 막아준다. (menu, login-btn 제외)
//   if (purpose !== "menu" && purpose !== "login-btn") {
//     history.pushState({ data: `${purpose}` }, null, `${purpose}`);
//   }
//   const navCheck = $.querySelector(".upper");
//   switch (purpose) {
//     case "menu":
//       ButtonReaction();
//       handleMenuClick();
//       break;
//     case "home":
//       // 로그인 창을 다녀오고 나면 nav가 사라지는 것을 대처하기 위해
//       if (!navCheck) {
//         Navigation(root);
//       }
//       Home(root);
//       break;
//     case "login":
//       Login(root);
//       break;
//     case "free-board":
//       Post(root);
//       break;
//     case "register":
//       Register(root);
//       break;
//     case "login-btn":
//       pageLogin(root);
//       break;
//     case "sign-up":
//       signUp(root);
//       break;
//     case "write":
//       write(root);
//   }
// }
