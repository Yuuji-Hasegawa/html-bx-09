export const backBtn = () => {
  let target = document.querySelector(".c-backbtn");
  if (target) {
    target.addEventListener("click", () => {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};
