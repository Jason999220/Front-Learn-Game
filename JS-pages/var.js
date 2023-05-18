const jsResult = document.querySelectorAll(".js-result");
const jsResultText = document.querySelectorAll(".js-result-text");
const input = document.querySelectorAll("input");
const handleOutput = document.querySelectorAll(".js-output");
const typeFinish = document.getElementById("type-finish");
for (let i = 0; i < handleOutput.length; i++) {
  handleOutput[i].addEventListener("click", () => {
    jsResultText[i].style.opacity = 1;
    if (i == 7) {
      typeFinish.style.opacity = 1;
    }
  });
}
