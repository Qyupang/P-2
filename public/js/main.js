import Header from "./pages/Header.js";
// import Navigation from "./pages/Navigation.js";
// import Home from "./pages/Home.js";
// import Post from "./pages/Posts.js";
// import Register from "./pages/Register.js";
// import Login from "./pages/Login.js";
// import write from "./pages/Write.js";

const $ = document;

const state = {
  state: "main",
};

// 처음 페이지가 시작될때 보이는 화면
function init() {
  const root = $.querySelector("#root");
  Header(root);
}

init();

// const currentPage = location.pathname;
// if (currentPage !== "/") {
//   // url이 루트가 아닌 경우(새로고침 된 경우 현재 경로에 맞는 화면 유지)
//   init();
//   switch (currentPage) {
//     // case "/menu":
//     //   ButtonReaction();
//     //   break;
//     case "/home":
//       Home(root);
//       break;
//     case "/":
//       Home(root);
//       break;
//     case "/login":
//       Login(root);
//       break;
//     case "/free-board":
//     case "/secret-board":
//     case "/info-board":
//     case "/promo-board":
//     case "/sw-board":
//       Post(root, currentPage);
//       break;
//     case "/register":
//       Register(root);
//       break;
//     case "/write":
//       write(root);
//       break;
//   }
// } else {
//   // url이 루트라면
//   init();
// }

// // 뒤로 가기나 앞으로 가기할때 현재의 url에 맞는 화면 출력
// window.addEventListener("popstate", () => {
//   const currentPage = location.pathname;
//   switch (currentPage) {
//     // case "/menu":
//     //   ButtonReaction();
//     //   break;
//     case "/home":
//       Home(root);
//       break;
//     case "/":
//       Home(root);
//       break;
//     case "/login":
//       if (Login(root)) {
//         console.log("true");
//         Home(root);
//       }
//       break;
//     case "/free-board":
//     case "/secret-board":
//     case "/info-board":
//     case "/promo-board":
//     case "/sw-board":
//       Post(root, currentPage);
//       break;
//     case "/register":
//       Register(root);
//       break;
//     case "/write":
//       write(root);
//       break;
//   }
// });
