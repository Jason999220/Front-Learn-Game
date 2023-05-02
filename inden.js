const border = document.getElementById("border");
const boxShadow = document.getElementById("box-shadow");
const result = document.getElementById("result");
const input = document.getElementById("input");

border.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.border = "1px solid #000";
  result.style.backgroundColor = "red";
});
boxShadow.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.boxShadow = "0 0 10px 10px rgb(0, 0, 0)";
  result.style.backgroundColor = "red";
});
input.addEventListener("change", () => {});
