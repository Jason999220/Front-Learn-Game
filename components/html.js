// 給HTML的區塊使用
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const htmlCode = document.querySelectorAll(".html-code");
const resultIframe = document.querySelectorAll(".css-result-iframe");

for (let i = 0; i < jsCodeRun.length; i++) {
  // 觸發 codeMirror 高亮
  const htmlCodeCodeMirror = CodeMirror.fromTextArea(htmlCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "xml", // 设置语言模式
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
  jsCodeRun[i].addEventListener("click", () => {
    resultIframe[i].contentDocument.body.innerHTML = ""; // reset
    resultIframe[i].contentDocument.body.innerHTML = htmlCode[i].value; // save HTML code

    // 監聽编辑器内容變化事件
    htmlCodeCodeMirror.on("change", function (cm) {
      // 编辑器中的内容設置到 textarea 中
      htmlCode[i].value = cm.getValue();
    });
  });
}
