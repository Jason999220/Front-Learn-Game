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
var a = [1, 2];
var b = { x: 1, y: 2 };
var c = function () {};
console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
