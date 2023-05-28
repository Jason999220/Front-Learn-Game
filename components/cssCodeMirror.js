// 給 HTML & CSS 使用
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const htmlCode = document.querySelectorAll(".html-code");
const cssCode = document.querySelectorAll(".css-code");
const cssResultIframe = document.querySelectorAll(".css-result-iframe");

for (let i = 0; i < jsCodeRun.length; i++) {
  // 當掛載時觸發，利用三元運算式，假如localStroage沒有資料就為HTML預設值，反之從localStorage取得資料
  let storageHmtl = localStorage.getItem(`storageHmtl${i}`)
    ? localStorage.getItem(`storageHmtl${i}`)
    : htmlCode[i].value;
  let storageCss = localStorage.getItem(`storageCss${i}`)
    ? localStorage.getItem(`storageCss${i}`)
    : cssCode[i].value;
  let storageResult = localStorage.getItem(`storageResult${i}`)
    ? localStorage.getItem(`storageResult${i}`)
    : null;
  htmlCode[i].innerHTML = storageHmtl; // 取出 HTML
  cssCode[i].innerHTML = storageCss; // 取出 CSS
  cssResultIframe[i].contentDocument.body.innerHTML = storageResult; // 取出 result

  // 觸發 codeMirror 高亮
  const htmlCodeCodeMirror = CodeMirror.fromTextArea(htmlCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "xml", // 語言模式
    theme: "dracula", // 主题樣式
    lineWrapping: true, // 是否自動換行，false => scroll
    tabSize: 4, // 縮排，預設為4
    smartIndent: true, // 自動調整縮進
    autoIndent: true,
    autoCloseTags: true, // 自動補齊Tag
    indentUnit: 4,
    extraKeys: {
      "Ctrl-Space": "autocomplete", // 自動補齊
    },
  });
  const cssCodeCodeMirror = CodeMirror.fromTextArea(cssCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "css", // 語言模式
    theme: "dracula", // 主题樣式
    lineWrapping: true, // 是否自動換行，false => scroll
    maxHeight: "25px", // 指定最大高度
    foldGutter: true, // 處理折疊
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"], // 處理折疊
    foldStyle: "brace", // 折疊方式
    tabSize: 4, // 縮排，預設為4
    smartIndent: true, // 自動調整縮進
    autoCloseTags: true, // 自動補齊Tag
    autoIndent: true,
    indentUnit: 4,
    extraKeys: {
      "Ctrl-Space": "autocomplete", // 自動補齊
    },
  });
  // 當點擊時觸發
  jsCodeRun[i].addEventListener("click", () => {
    // cssResultIframe[i].contentDocument.body.innerHTML = ""; // reset
    resultCode = htmlCode[i].value + "<style>" + cssCode[i].value + "</style>";
    cssResultIframe[i].contentDocument.body.innerHTML = resultCode; // save HTML code

    // 監聽编辑器内容變化事件
    htmlCodeCodeMirror.on("change", function (cm) {
      // 编辑器中的内容設置到 textarea 中
      htmlCode[i].value = cm.getValue();
    });
    cssCodeCodeMirror.on("change", function (cm) {
      // 编辑器中的内容設置到 textarea 中
      cssCode[i].value = cm.getValue();
    });

    // use localStorage save html and css code
    localStorage.setItem(`storageHmtl${i}`, htmlCode[i].value);
    localStorage.setItem(`storageCss${i}`, cssCode[i].value);
    localStorage.setItem(`storageResult${i}`, resultCode);
  });
}
