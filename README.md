# 前端圖片式學習網站

利用點擊圖片或區塊顯示效果，使用者可自行調整參數，藉由圖形實際演練而熟悉語法

## Learn

### 將程式碼區改用滾軸方式

### 將 hover 用 JS 載入 CSS inline

### 將使用者在 CSS page 中的小試身手輸入的 code 儲存在 localStroage

### 程式碼高亮

## Questions

### 使 js 的 console 值，顯示在 Iframe 上 =>

jsCodeRun.addEventListener("click", () => {
consoleIframe.contentDocument.body.innerHTML = ""; // reset
resultIframe.contentDocument.body.innerHTML = ""; // reset
resultIframe.contentDocument.body.innerHTML = htmlCode.value; // save HTML code
resultIframe.contentWindow.eval(jsCode.value); // save JS code
try {
// 其餘參數 ...args => 不確定參數會有 f 幾個的情況
console.log = (msg, ...args) => {
consoleIframe.contentDocument.body.innerHTML += ` <p style="border: 1px solid #fff">${msg} ${args}</p>`; // 在<iframe>中顯示结果
};
eval(jsCode[i].value); // 執行當前 JS 代碼
} catch (error) {
alert(error);
console.log(error); // 在<iframe>中顯示錯誤
consoleIframe[i].contentDocument.body.innerHTML = error;
}
});

### 利用 JS 將改動的參數動態寫入 CSS inline => 有辦法整段載入嗎，不然就會變成 label + input

transformTranslate.addEventListener("click", () => {
inner2ResetStyle();
inner2.style.transform = "translate(0%, 0%)";
content.innerHTML =
"<p>translate(水平方向, 垂直方向)以元素中心當參考點進行位移<br>負值的話以元素本身向左向上移動<br>反之以元素本身向右向下移動<br>單位 : 尺寸值或百分比</p>";
});
inputTransformTranslate.addEventListener("change", (event) => {
inner2.style.transform = event.target.value;
});

### 使撰寫 code 部分跟 codepen 相似 => 如何高亮

#### 高亮模組 => prism

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-javascript.min.js"></script>

#### 高亮模組 => CodeMirror

   <!--begin code mirror -->

    <!--下面两个是使用Code Mirror必须引入的-->
    <!-- CodeMirror 核心文件 -->
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/lib/codemirror.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/codemirror@5.31.0/lib/codemirror.js"></script>

    <!-- 高亮代碼 -->
    <script src="https://codemirror.net/mode/htmlmixed/htmlmixed.js"></script>
    <script src="https://codemirror.net/mode/xml/xml.js"></script>
    <script src="https://codemirror.net/mode/css/css.js"></script>
    <script src="https://codemirror.net/mode/javascript/javascript.js"></script>

    <!-- CodeMirror Add-ons -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/addon/edit/closebrackets.min.js"></script>

    <script src="https://codemirror.net/addon/edit/closebrackets.js"></script>
    <script src="https://codemirror.net/addon/edit/closetag.js"></script>
    <!-- 控制縮排 => smartIndent -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.62.0/addon/indent/indent.min.js"></script>

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

## JS clone 參考網址

https://github.com/sivadass/jsarena/blob/main/web/src/scripts/index.js
https://jsarena.dev/
