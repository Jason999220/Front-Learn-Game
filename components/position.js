const inputPositionDirectionTop = document.querySelectorAll(
  ".input-position-direction-top"
);
const inputPositionDirectionRight = document.querySelectorAll(
  ".input-position-direction-right"
);
const inputPositionDirectionBottom = document.querySelectorAll(
  ".input-position-direction-bottom"
);
const inputPositionDirectionLeft = document.querySelectorAll(
  ".input-position-direction-left"
);
// 程式碼區
const positionStatic = document.getElementById("position-static");
const positionRelative = document.getElementById("position-relative");
const positionAbsolute = document.getElementById("position-absolute");
const positionFixed = document.getElementById("position-fixed");
const positionSticky = document.getElementById("position-sticky");

// position reset
const positionReset = () => {
  inner1.style = "";
};

// position methods
positionStatic.addEventListener("click", () => {
  positionReset();
  inner1.style.position = "static";
  content.innerHTML =
    "<p>position:static是預設值<br>top、right、bottom、left均不會有效果</p>";
});
positionRelative.addEventListener("click", () => {
  positionReset();
  inner1.style.position = "relative";
  content.innerHTML =
    "<p>position:relative的原始空間不會消失<br>top、right、bottom、left均會有效果</p>";
});
positionAbsolute.addEventListener("click", () => {
  positionReset();
  inner1.style.position = "absolute";
  content.innerHTML =
    "<p>position:absolute的原始空間會消失<br>會相對於離自己最近的非static的區塊<br>假使都沒有的話會相對body<br>top、right、bottom、left均會有效果<br></p>";
});
positionFixed.addEventListener("click", () => {
  positionReset();
  inner1.style.position = "fixed";
  content.innerHTML =
    "<p>position:fixed的原始空間會消失<br>會固定在畫面的位置上<br>不會隨著畫面移動而變化<br>top、right、bottom、left均會有效果<br></p>";
});
positionSticky.addEventListener("click", () => {
  positionReset();
  inner1.style.position = "sticky";
  content.innerHTML =
    "<p>position:sticky的原始空間不會消失<br>會黏在區塊的位置上<br>會隨著畫面移動而變化<br><br>top、right、bottom、left均會有效果<br></p>";
});

// 方向
// inputPositionDirectionTop[0].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.top = event.target.value;
// });
// inputPositionDirectionTop[1].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.top = event.target.value;
// });
// inputPositionDirectionTop[2].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.top = event.target.value;
// });
// inputPositionDirectionTop[3].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.top = event.target.value;
// });
// inputPositionDirectionTop[4].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.top = event.target.value;
// });
// inputPositionDirectionRight[0].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.right = event.target.value;
// });
// inputPositionDirectionRight[1].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.right = event.target.value;
// });
// inputPositionDirectionRight[2].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.right = event.target.value;
// });
// inputPositionDirectionRight[3].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.right = event.target.value;
// });
// inputPositionDirectionRight[4].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.right = event.target.value;
// });
// inputPositionDirectionBottom[0].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.bottom = event.target.value;
// });
// inputPositionDirectionBottom[1].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.bottom = event.target.value;
// });
// inputPositionDirectionBottom[2].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.bottom = event.target.value;
// });
// inputPositionDirectionBottom[3].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.bottom = event.target.value;
// });
// inputPositionDirectionBottom[4].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.bottom = event.target.value;
// });
// inputPositionDirectionLeft[0].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.left = event.target.value;
// });
// inputPositionDirectionLeft[1].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.left = event.target.value;
// });
// inputPositionDirectionLeft[2].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.left = event.target.value;
// });
// inputPositionDirectionLeft[3].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.left = event.target.value;
// });
// inputPositionDirectionLeft[4].addEventListener("change", (event) => {
//   console.log(event.target.value); // get change value
//   inner1.style.left = event.target.value;
// });

// 利用loop簡寫
for (let i = 0; i < inputPositionDirectionTop.length; i++) {
  inputPositionDirectionTop[i].addEventListener("change", (event) => {
    // console.log(event.target.value); // get change value
    inner1.style.top = event.target.value;
  });
}
for (let i = 0; i < inputPositionDirectionRight.length; i++) {
  inputPositionDirectionRight[i].addEventListener("change", (event) => {
    // console.log(event.target.value); // get change value
    inner1.style.right = event.target.value;
  });
}
for (let i = 0; i < inputPositionDirectionBottom.length; i++) {
  inputPositionDirectionBottom[i].addEventListener("change", (event) => {
    // console.log(event.target.value); // get change value
    inner1.style.bottom = event.target.value;
  });
}
for (let i = 0; i < inputPositionDirectionLeft.length; i++) {
  inputPositionDirectionLeft[i].addEventListener("change", (event) => {
    // console.log(event.target.value); // get change value
    inner1.style.left = event.target.value;
  });
}
