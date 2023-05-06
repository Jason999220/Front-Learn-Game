const displayBox1 = document.getElementById("display-box1");
const displayBox2 = document.getElementById("display-box2");
const displayBox3 = document.getElementById("display-box3");
const displayBox4 = document.getElementById("display-box4");
const displayBox5 = document.getElementById("display-box5");

// 先將CSS還原
resultBox.style.justifyContent = "flex-start";
resultBox.style.alignItems = "flex-start";
resultBox.style["overflowY"] = "hidden";
// resultBox.style = "overflow-y:hidden";

const displayBoxReset = () => {
  // 隱藏box3、box4 ，並更改box1、box2、box3名稱，給flex使用
  displayBox2.style.display = "none";
  displayBox4.style.display = "none";
  displayBox1.innerText = "box-normal";
  displayBox3.innerText = "box-long";
  displayBox5.innerText = "box-short";
  displayBox1.style["font-size"] = "1rem";
  displayBox3.style["font-size"] = "1rem";
  displayBox5.style["font-size"] = "1rem";
};
const flexReset = () => {
  displayBox2.style.display = "flex";
  displayBox4.style.display = "flex";
  displayBox1.innerText = "box1";
  displayBox3.innerText = "box3";
  displayBox5.innerText = "box5";
  displayBox1.style["font-size"] = "1.5rem";
  displayBox3.style["font-size"] = "1.5rem";
  displayBox5.style["font-size"] = "1.5rem";
  displayBox1.style["flex"] = "none";
  displayBox3.style["flex"] = "none";
  displayBox5.style["flex"] = "none";
};

// 程式碼區
const flexDirection = document.getElementById("flex-direction");
const inputFlexDirection = document.getElementById("input-flex-direction");
const flexWrap = document.getElementById("flex-wrap");
const inputFlexWrap = document.getElementById("input-flex-wrap");
const flexFlow = document.getElementById("flex-flow");
const inputFlexFlow = document.getElementById("input-flex-flow");
const justifyContent = document.getElementById("justify-content");
const inputJustifyContent = document.getElementById("input-justify-content");
const alignItems = document.getElementById("align-items");
const inputAlignItems = document.getElementById("input-align-items");
const flexGrow = document.getElementById("flex-grow");
const inputFlexGrowNormal = document.getElementById("input-flex-grow-normal");
const inputFlexGrowLong = document.getElementById("input-flex-grow-long");
const inputFlexGrowShort = document.getElementById("input-flex-grow-short");
const flexShrink = document.getElementById("flex-shrink");
const inputFlexShrinkNormal = document.getElementById(
  "input-flex-shrink-normal"
);
const inputFlexShrinkLong = document.getElementById("input-flex-shrink-long");
const inputFlexShrinkShort = document.getElementById("input-flex-shrink-short");
const flexBasis = document.getElementById("flex-basis");
const inputFlexBasisNormal = document.getElementById("input-flex-basis-normal");
const flex = document.getElementById("flex");
const inputFlex = document.getElementById("input-flex");

// flex-direction
flexDirection.addEventListener("click", (event) => {
  flexReset();
  resultBox.style.flexDirection = "row";
  content.innerHTML =
    "<p>掌管元素的排列方向<br>row 為預設值，由左到右<br>row-reverse 與row相反<br>column 從上到下<br>column-reverse 與column相反</p>";
});
inputFlexDirection.addEventListener("change", (event) => {
  resultBox.style.flexDirection = event.target.value;
});
// flex-wrap
flexWrap.addEventListener("click", () => {
  flexReset();
  resultBox.style.flexWrap = "nowrap";
  content.innerHTML =
    "<p>假如超過寬度則會換到下一行<br>nowrap 為預設值<br>wrap 、wrap-reverse</p>";
});
inputFlexWrap.addEventListener("change", (event) => {
  resultBox.style.flexWrap = event.target.value;
});

// flex-flow
flexFlow.addEventListener("click", () => {
  flexReset();
  resultBox.style.flexFlow = "column wrap";
  content.innerHTML = "<p>為flex-direction 和 flex-wrap 縮寫，沒有順序之分</p>";
});
inputFlexFlow.addEventListener("change", (event) => {
  resultBox.style.flexFlow = event.target.value;
});

// justify-content
justifyContent.addEventListener("click", () => {
  flexReset();
  resultBox.style.justifyContent = "flex-start";
  content.innerHTML =
    "<p>主軸對齊<br>flex-start 為預設值，對齊主軸起點<br>flex-end 對齊主軸終點<br>center 水平置中<br>space-between 平均分配元素位置，但左右兩側會貼齊<br>space-around 平均分配元素位置，但左右兩側間距會較小<br>space-evenly 元素和左右兩側間距相同</p>";
});
inputJustifyContent.addEventListener("change", (event) => {
  resultBox.style.justifyContent = event.target.value;
});

// align-items
alignItems.addEventListener("click", () => {
  flexReset();
  resultBox.style.alignItems = "flex-start";
  content.innerHTML =
    "<p>以交錯軸為基準對齊<br>stretch 為預設值，往交錯軸方向將內元素填滿，若有設高度則失效<br>flex-start 對齊交錯軸起點<br>flex-end 對齊交錯軸終點<br>center 置中<br>baseline 以大文字的底線為基準</p>";
});
inputAlignItems.addEventListener("change", (event) => {
  resultBox.style.alignItems = event.target.value;
});

// flex-grow
flexGrow.addEventListener("click", () => {
  // 隱藏box3、box4 ，並更改box1、box2、box3名稱
  displayBoxReset();
  content.innerHTML = "<p>預設值為0<br>會依照設定的值去分配剩餘空間</p>";
  inputFlexGrowNormal.addEventListener("change", (event) => {
    displayBox1.style["flex-grow"] = event.target.value;
  });
  inputFlexGrowLong.addEventListener("change", (event) => {
    displayBox3.style["flex-grow"] = event.target.value;
  });
  inputFlexGrowShort.addEventListener("change", (event) => {
    displayBox5.style["flex-grow"] = event.target.value;
  });
});
// flex-shrink
flexShrink.addEventListener("click", () => {
  resultBox.style.flexShrink = "nowrap";
  // 隱藏box3、box4 ，並更改box1、box2、box3名稱
  displayBoxReset();
  content.innerHTML = "<p>預設值為 1<br>當空間不夠時，所壓縮的比例</p>";
  resultBox.style.flexShrink = event.target.value;
  inputFlexShrinkNormal.addEventListener("change", (event) => {
    displayBox1.style["flex-shrink"] = event.target.value;
  });
  inputFlexShrinkLong.addEventListener("change", (event) => {
    displayBox3.style["flex-shrink"] = event.target.value;
  });
  inputFlexShrinkShort.addEventListener("change", (event) => {
    displayBox5.style["flex-shrink"] = event.target.value;
  });
});
// flex-basis
flexBasis.addEventListener("click", () => {
  // 隱藏box3、box4 ，並更改box1、box2、box3名稱
  displayBoxReset();
  content.innerHTML = "<p>本質上與width相同，但優先權較width高</p>";
  inputFlexBasisNormal.addEventListener("change", (event) => {
    displayBox1.style["flex-basis"] = event.target.value;
  });
});
// flex
flex.addEventListener("click", () => {
  displayBox1.style["flex-grow"] = "0";
  displayBox3.style["flex-grow"] = "1";
  displayBox5.style["flex-grow"] = "1";
  // 隱藏box3、box4 ，並更改box1、box2、box3名稱
  displayBoxReset();
  content.innerHTML =
    "<p>flex是以上三個的縮寫<br>本網站已預設其餘兩個flex-grow:1<br>一個無單位的數值時 => flex-grow<br>一個有單位的數值時 => flex-basis<br>兩個值時 => flex-grow | flex-basis 或 flex-grow | flex-shrink<br>三個值時 => flex-grow | flex-shrink | flex-basis</p>";
});
inputFlex.addEventListener("change", (event) => {
  displayBox1.style.flex = event.target.value;
});
