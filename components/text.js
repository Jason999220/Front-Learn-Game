const inputUserText = document.getElementById("input-user-text");
const text = document.getElementById("text");
text.style.width = "inherit";
// 程式碼區
const fontSize = document.getElementById("font-size");
const inputFontSize = document.getElementById("input-font-size");
const fontWeight = document.getElementById("font-weight");
const inputFontWeight = document.getElementById("input-font-weight");
const textAlign = document.getElementById("text-align");
const inputTextAlign = document.getElementById("input-text-align");
const fontStyle = document.getElementById("font-style");
const inputFontStyle = document.getElementById("input-font-style");
const letterSpacing = document.getElementById("letter-spacing");
const inputLetterSpacing = document.getElementById("input-letter-spacing");
const lineHeight = document.getElementById("line-height");
const inputLineHeight = document.getElementById("input-line-height");
const textOverflow = document.getElementById("text-overflow");
const inputTextOverflow = document.getElementById("input-text-overflow");
const color = document.getElementById("color");
const inputColor = document.getElementById("input-color");

// inputUserText
inputUserText.addEventListener("change", (event) => {
  text.textContent = event.target.value;
});

// font-size
fontSize.addEventListener("click", () => {
  text.style.fontSize = "16px";
  content.innerHTML = "<p>文字大小，預設16px</p>";
});
inputFontSize.addEventListener("change", (event) => {
  text.style.fontSize = event.target.value;
});

// font-weight
fontWeight.addEventListener("click", () => {
  text.style.fontWeight = "600";
  content.innerHTML =
    "<p>文字粗度，預設 normal <br>總共 100 ~ 900<br>400相當於 normal<br>700 相當於 bold<br>bolder 極粗<br>lighter 極細</p>";
});
inputFontWeight.addEventListener("change", (event) => {
  text.style.fontWeight = event.target.value;
});

// text-align
textAlign.addEventListener("click", () => {
  text.style.textAlign = "center";
  content.innerHTML =
    "<p>文字位置，預設 文本最左邊 <br>總共有 left、right、center、justify<br>justify 指的是在區塊(Block)的情況下將所有文字左右對齊，使得行尾切齊</p>";
});
inputTextAlign.addEventListener("change", (event) => {
  text.style.textAlign = event.target.value;
});

// font-style
fontStyle.addEventListener("click", () => {
  text.style.fontStyle = "normal";
  content.innerHTML =
    "<p>字體樣式，預設 normal <br>總共有 normal、italic、obique<br>italic 斜體字 <br>oblique 傾斜字 <br>我也不太明白有甚麼差異 有大大知道請私訊我</p>";
});
inputFontStyle.addEventListener("change", (event) => {
  text.style.fontStyle = event.target.value;
});

// letter-spacing
letterSpacing.addEventListener("click", () => {
  text.style.letterSpacing = "2px";
  content.innerHTML = "<p>字的間距，允許負值</p>";
});
inputLetterSpacing.addEventListener("change", (event) => {
  text.style.letterSpacing = event.target.value;
});

// line-height
lineHeight.addEventListener("click", () => {
  text.style.lineHeight = "20%";
  content.innerHTML = "<p>字的行高，不允許負值</p>";
});
inputLineHeight.addEventListener("change", (event) => {
  text.style.lineHeight = event.target.value;
});

// text-overflow
textOverflow.addEventListener("click", () => {
  text.style.whiteSpace = "nowrap";
  text.style.overflow = "hidden";
  text.style.textOverflow = "ellipsis";
  content.innerHTML =
    "<p>將溢出的字隱藏，前提文字必須超過此元素寬度<br>必須搭配以下兩段程式碼做使用此網站已先使用<br>white-space:nowrap 使溢出的文字不換行<br>overflow:hidden 使溢出的文字隱藏<br>可使用 clip、ellipsis<br>clip 效果為截斷溢出的文字不做任何美化不使用也可以<br>ellipsis 假使有文字溢出就會在結尾顯示 ... 進行美化，讓使用者知道還有後續</p>";
});
inputTextOverflow.addEventListener("change", (event) => {
  text.style.textOverflow = event.target.value;
});

// color
color.addEventListener("click", () => {
  text.style.color = "white";
  content.innerHTML = "<p>你很棒~就是你想的那樣~~~就是改變字的顏色</p>";
});
inputColor.addEventListener("change", (event) => {
  text.style.color = event.target.value;
});
