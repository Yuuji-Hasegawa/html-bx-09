export const menu = () => {
  let btn = document.querySelector(".o-box--menu-btn");
  let gnav = document.querySelector("#gnav");
  function init() {
    if (window.matchMedia("(min-width: 961px)").matches) {
      gnav.setAttribute("tabindex", "");
      gnav.setAttribute("aria-hidden", "false");
      btn.setAttribute("aria-label", "menu open");
      btn.setAttribute("aria-expanded", "true");
    } else {
      gnav.setAttribute("tabindex", "-1");
      gnav.setAttribute("aria-hidden", "true");
      btn.setAttribute("aria-label", "menu open");
      btn.setAttribute("aria-expanded", "false");
    }
    gnav.classList.remove("c-gnav--is-open");
    btn.classList.remove("is-open");
    btn.blur();
  }
  function check() {
    if (gnav.getAttribute("tabindex") == "-1") {
      btn.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      btn.setAttribute("aria-label", "menu close");
      gnav.classList.add("c-gnav--is-open");
      gnav.setAttribute("tabindex", "");
      gnav.setAttribute("aria-hidden", "false");
    } else {
      btn.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "menu open");
      gnav.classList.remove("c-gnav--is-open");
      gnav.setAttribute("tabindex", "-1");
      gnav.setAttribute("aria-hidden", "true");
      btn.blur();
    }
  }
  btn.addEventListener("click", () => {
      check();
  });
  window.addEventListener("load", () => {
    init();
  });
  window.addEventListener("resize", () => {
    init();
  });
};
