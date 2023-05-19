# 前端圖片式學習網站

利用點擊圖片或區塊顯示效果，使用者可自行調整參數，藉由圖形實際演練而熟悉語法

## 將程式碼區改用滾軸方式

overflow-y: scroll;

## 使 js 的 console 值，顯示在 Iframe 上 =>

1. 先取得 console 字串
2. 在進入 console.log = fn(msg){}
3. 在函式中利用 str.replace() 方法取出 console.log(data) 中的 data
4. 之後利用 iframe.contentDocument.body.innerHTML += `${hadleLogValue(msg)}<br>`; 將 data 呈現在畫面

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

## 使撰寫 code 部分跟 codepen 相似 => 如果要有高亮 可以使用 prism.min.css

### 高亮模組 => prism

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-javascript.min.js"></script>

### 高亮模組 => CodeMirror

  <!--begin code mirror -->

    <!--下面两个是使用Code Mirror必须引入的-->
    <!-- CodeMirror 核心文件 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/lib/codemirror.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/lib/codemirror.js"></script>

    <!-- Java 代码高亮 -->
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/mode/clike/clike.js"></script>

    <!-- Groovy 代码高亮 -->
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/mode/groovy/groovy.js"></script>

    <!-- 主题样式文件 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/theme/dracula.css"
    />

    <!-- 代码折叠支持 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/fold/foldgutter.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/fold/foldcode.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/fold/foldgutter.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/fold/brace-fold.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/fold/comment-fold.js"></script>

    <!-- 括号匹配支持 -->
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/addon/edit/matchbrackets.js"></script>
    <!--end Code Mirror -->

## JS clone

https://github.com/sivadass/jsarena/blob/main/web/src/scripts/index.js
https://jsarena.dev/
