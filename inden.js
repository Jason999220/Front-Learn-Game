// 結果區
const result = document.getElementById("result");
const content = document.getElementById("content");

// 程式碼區
const height = document.getElementById("height");
const inputHeight = document.getElementById("input-height");
const width = document.getElementById("width");
const inputWidth = document.getElementById("input-width");
const border = document.getElementById("border");
const inputBorder = document.getElementById("input-border");
const boxShadow = document.getElementById("box-shadow");
const inputBoxShadow = document.getElementById("input-boxShadow");
const background = document.getElementById("background");
const inputBackground = document.getElementById("input-background");
const padding = document.getElementById("padding");
const inputPadding = document.getElementById("input-padding");
const margin = document.getElementById("margin");
const inputMargin = document.getElementById("input-margin");
const outline = document.getElementById("outline");
const inputOutline = document.getElementById("input-outline");

height.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.backgroundColor = "red";
  content.innerText = "height: height number";
});
inputHeight.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.height = event.target.value;
});

width.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.backgroundColor = "red";
});
inputWidth.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.width = event.target.value;
});

border.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.border = "1px solid #000";
  result.style.backgroundColor = "red";
  content.innerText = "border: 邊框粗度 邊框樣式 邊框顏色";
});
inputBorder.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.border = event.target.value;
});

boxShadow.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.boxShadow = "0 0 10px 10px rgb(0, 0, 0)";
  result.style.backgroundColor = "red";
  content.innerText = "boxShadow : x軸位移 y軸位移 ";
});
inputBoxShadow.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.boxShadow = event.target.value;
});

background.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.background = "block";
});
inputBackground.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.background = event.target.value;
});

// boxShadow.addEventListener("click", () => {
//   result.style = "";
//   result.style.width = "150px";
//   result.style.height = "150px";
//   result.style.boxShadow = "0 0 10px 10px rgb(0, 0, 0)";
//   result.style.backgroundColor = "red";
// });
// inputBoxShadow.addEventListener("change", (event) => {
//   // console.log(event.target.value); // get change value
//   result.style.boxShadow = event.target.value;
// });
