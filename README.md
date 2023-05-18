# 前端圖片式學習網站

利用點擊圖片或區塊顯示效果，使用者可自行調整參數，藉由圖形實際演練而熟悉語法

## 搜尋列利用正則表達式查詢

## 將程式碼區改用滾軸方式

overflow-y: scroll;

## 在頁尾加上 Copyright

## 使撰寫 code 部分跟 codepen 相似

## 改變 overflow:scroll 的樣式

## 利用 JS 將改動的參數動態寫入 CSS inline => 有辦法整段載入嗎，不然就會變成 label + input

transformTranslate.addEventListener("click", () => {
inner2ResetStyle();
inner2.style.transform = "translate(0%, 0%)";
content.innerHTML =
"<p>translate(水平方向, 垂直方向)以元素中心當參考點進行位移<br>負值的話以元素本身向左向上移動<br>反之以元素本身向右向下移動<br>單位 : 尺寸值或百分比</p>";
});
inputTransformTranslate.addEventListener("change", (event) => {
inner2.style.transform = event.target.value;
});

## 將 hover 用 JS 載入 CSS inline

## 區塊使用 element.style. 會覆蓋，但文字時候不會(text.js)
