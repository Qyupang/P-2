const $ = document;

export default function Home(root) {
  const home = $.createElement("div");
  home.innerHTML = `
  <form action="post" class="home-selection-box">
  <select name="regions" id="home-region-select">
    <option value="">-- 지역을 선택하세요 --</option>
    <option value="gwanggyo">광교</option>
    <option value="wooman">우만동</option>
    <option value="pangyo">판교</option>
  </select>
</form>
          `;

  // 대체해야할 페이지가 존재하면 지워버리고 새 것을 삽입한다.
  const toBeReplaced = $.querySelector(".replace");
  if (toBeReplaced) {
    toBeReplaced.remove();
  }

  home.classList.add("main-home__message", "replace");
  root.appendChild(home);
}
