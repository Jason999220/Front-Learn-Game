const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const jsCode = document.querySelectorAll(".js-code");
const CodeMirrorCode = document.querySelectorAll(".CodeMirror-code");

// 第三版
for (let i = 0; i < jsCodeRun.length; i++) {
  // 觸發 codeMirror 高亮
  const jsCodeCodeMirror = CodeMirror.fromTextArea(jsCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "js", // 设置语言模式
    theme: "dracula", // 设置主题样式（可选）
    lineWrapping: true, // 是否自動換行，false => scroll
    tabSize: 4, // 縮排，預設為4
    smartIndent: true, // 自動調整縮進
    autoIndent: true,
    autoCloseTags: true, // 自動補齊Tag
    indentUnit: 4,
    extraKeys: {
      "Ctrl-Space": "autocomplete", // 启用自动补全},
    },
  });
  // 當點擊時觸發
  jsCodeRun[i].addEventListener("click", () => {
    // 监听编辑器内容变化事件
    jsCodeCodeMirror.on("change", function (cm) {
      // 将编辑器中的内容设置到 textarea 中
      jsCode[i].value = cm.getValue();
    });
  });
}
