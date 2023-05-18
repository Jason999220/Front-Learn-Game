// transform
const transformTranslate = document.getElementById("transform-translate");
const inputTransformTranslate = document.getElementById(
  "input-transform-translate"
);
const transformScale = document.getElementById("transform-scale");
const inputTransformScale = document.getElementById("input-transform-scale");
const transformRotate = document.getElementById("transform-rotate");
const inputTransformRotate = document.getElementById("input-transform-rotate");
const transformRotate3d = document.getElementById("transform-rotate3d");
const inputTransformRotate3d = document.getElementById(
  "input-transform-rotate3d"
);
const animation = document.getElementById("animation");
const inputAnimation = document.getElementById("input-animation");
const keyframes = document.getElementById("keyframes");

// transition
const transition = document.getElementById("transition");
const inputTransition = document.getElementById("input-transition");

// 利用function 清空inner2 style
const inner2ResetStyle = () => {
  inner2.style = "";
  inner2.style.width = "75px";
  inner2.style.height = "75px";
  inner2.style.background = "yellow";
};

// transform
transformTranslate.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.style.transform = "translate(0%, 0%)";
  content.innerHTML =
    "<p>translate(水平方向, 垂直方向)以元素中心當參考點進行位移<br>負值的話以元素本身向左向上移動<br>反之以元素本身向右向下移動<br>單位 : 尺寸值或百分比</p>";
});
inputTransformTranslate.addEventListener("change", (event) => {
  inner2.style.transform = event.target.value;
});

transformScale.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.style.transform = "scale(1,1)";
  content.innerHTML =
    "<p>scale(倍率)以元素中心當參考點進行2D縮放<br>負值的話以元素本身向左向上移動<br>反之以元素本身向右向下移動<br>也是可以針對XY拆開來撰寫<br>單位 : 倍率</p>";
});
inputTransformScale.addEventListener("change", (event) => {
  inner2.style.transform = event.target.value;
});

transformRotate.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.style.transform = "rotate(0deg)";
  content.innerHTML =
    "<p>rotate(deg 角度)以元素中心當參考點進行2D旋轉<br>負值的話逆時針旋轉<br>反之順時針旋轉<br>單位 : deg</p>";
});
inputTransformRotate.addEventListener("change", (event) => {
  inner2.style.transform = event.target.value;
});

transformRotate3d.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.style.transform = "rotate3d(1, 1, 0, 60deg)";
  content.innerHTML =
    "<p>rotate3d(x,y,z,deg)以元素中心當參考點進行3D旋轉<br>負值的話逆時針旋轉<br>反之順時針旋轉<br>單位 : deg</p>";
});
inputTransformRotate3d.addEventListener("change", (event) => {
  inner2.style.transform = event.target.value;
});

// transition
transition.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.addEventListener("mouseover", () => {
    inner2.style.width = "100px";
    inner2.style.height = "100px";
  });
  inner2.addEventListener("mouseout", () => {
    inner2.style.width = "75px";
    inner2.style.height = "75px";
  });
  inner2.style.transition = "width 2s ease-in 0.5s";
  content.innerHTML =
    "<p>transition = <br>transition-property | transition-duration | transition-timing-function | transition-delay; <br>transition-property : 要動畫的CSS屬性 ，可以使用all<br>transition-duration : 動畫所需的時間，預設為0，單位為s、ms<br>transition-timing-function : 動畫時速度曲線<br>linear、ease(預設值)、ease-in、ease-out<br> transition-delay : 觸發動畫的延遲時間，預設為0，單位為s、ms<br>通常是搭配會動的區塊:如hover、transform</p>";
});
inputTransition.addEventListener("change", (event) => {
  inner2.style.transition = event.target.value;
});

// animation
animation.addEventListener("click", () => {
  inner2ResetStyle();
  inner2.style.position = "relative";
  inner2.style.animation = "name 2s infinite";
  document.style = "color:red";
  content.innerHTML =
    "<p>animation:<br> name | duration | timing-function | delay | iteration-count | direction | fill-mode<br>必須搭配keyframes指定動畫名稱<br>記得設定position才能動作唷</p>";
});

inputAnimation.addEventListener("change", (event) => {
  inner2.style.animation = event.target.value;
});
