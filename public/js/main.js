import Header from "./pages/Header.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";

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

const currentPage = location.pathname;
if (currentPage !== "/") {
  // url이 루트가 아닌 경우(새로고침 된 경우 현재 경로에 맞는 화면 유지)
  switch (currentPage) {
    case "/home":
      Home(root);
      break;
    case "/login":
      Login(root);
      break;
  }
}

// 뒤로 가기나 앞으로 가기할때 현재의 url에 맞는 화면 출력
window.addEventListener("popstate", () => {
  const currentPage = location.pathname;
  switch (currentPage) {
    case "/home":
      Home(root);
      break;
    case "/":
      Home(root);
      break;
    case "/login":
      if (Login(root)) {
        console.log("true");
        Home(root);
      }
      break;
  }
});
