// 도시별 매물 추가
import createButton from "./Button.js";

const $ = document;

export default function Home(root) {
  const home = $.createElement("div");
  home.innerHTML = `
  <form action="post" class="home-selection-box">
  <select name="regions" id="home-region-select">
    <option value="">-- 지역을 선택하세요 --</option>
    <option class="gwanggyo" value="gwanggyo">광교</option>
    <option class="wooman" value="wooman">우만동</option>
    <option class="pangyo" value="pangyo">판교</option>
  </select>
</form>
          `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }

  home.classList.add("replace");
  root.appendChild(home);

  const selection = $.querySelector(".home-selection-box");

  selection.addEventListener("change", function (event) {
    const selectedRegion = event.target.value;
    console.log(selectedRegion);
    switch (selectedRegion) {
      case "gwanggyo":
        history.pushState({ data: "gwanggyo" }, null, "gwanggyo");
        break;
      case "wooman":
        history.pushState({ data: "wooman" }, null, "wooman");
        break;
      case "pangyo":
        history.pushState({ data: "pangyo" }, null, "pangyo");
        break;
    }
  });
}
