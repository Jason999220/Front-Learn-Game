// 程式碼區
const cursor = document.getElementById("cursor");
const inputCursor = document.getElementById("input-cursor");
const transform = document.getElementById("transform");
const inputTransform = document.getElementById("input-transform");
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

cursor.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.cursor = "pointer";
  result.style.backgroundColor = "red";
  content.innerText = "cursor: 鼠標樣式";
  content.innerHTML =
    " <p>cursor: 鼠標樣式<br>pointer : 箭頭 <br> help : 問號 <br> not-allowed : 禁止</p>";
});
inputCursor.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.cursor = event.target.value;
});

transform.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.transform = "translate(-50%, -10%)";
  result.style.backgroundColor = "red";
  content.innerText = "transform: 樣式改變";
});
inputTransform.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.transform = event.target.value;
});

border.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.style.border = "1px solid #000";
  result.style.backgroundColor = "red";
  content.innerHTML = "<h6>border: 邊框粗度 邊框樣式 邊框顏色<h6/>";
  content.innerHTML = "<p>邊框樣式=><br> solid:實線<br> dashed:短實線 <p/>";
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
  content.innerText =
    "boxShadow : 水平位移 垂直位移 模糊程度 陰影擴散度 顏色 |內外陰影";
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
  content.innerText = "background : 背景顏色";
});
inputBackground.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.background = event.target.value;
});

padding.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.innerText = "padding";
  result.style.backgroundColor = "red";
  result.style.padding = "0px";
  content.innerText = "padding: 內文與容器之距離";
});
inputPadding.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.padding = event.target.value;
});

margin.addEventListener("click", () => {
  result.style = "";
  result.style.width = "150px";
  result.style.height = "150px";
  result.innerText = "margin";
  result.style.backgroundColor = "red";
  result.style.margin = "0px";
  content.innerText = "margin: 容器對外之距離";
});
inputMargin.addEventListener("change", (event) => {
  // console.log(event.target.value); // get change value
  result.style.margin = event.target.value;
});
