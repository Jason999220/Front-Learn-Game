// 給 HTML & JS 使用
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const htmlCode = document.querySelectorAll(".html-code");
const jsCode = document.querySelectorAll(".js-code");
const resultIframe = document.querySelectorAll(".css-result-iframe");

// 第三版
for (let i = 0; i < jsCodeRun.length; i++) {
  // 觸發 codeMirror 高亮
  const htmlCodeCodeMirror = CodeMirror.fromTextArea(htmlCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "xml", // 語言模式
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
  const jsCodeCodeMirror = CodeMirror.fromTextArea(jsCode[i], {
    lineNumbers: true, // 顯示行號
    mode: "javascript", // 語言模式
    theme: "dracula", // 主题樣式
    lineWrapping: true, // 是否自動換行，false => scroll
    maxHeight: "25px", // 指定最大高度
    maxWidth: "400px", // 指定最大高度
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

  jsCodeRun[i].addEventListener("click", () => {
    resultIframe[i].contentDocument.body.innerHTML = ""; // reset

    // 監聽编辑器内容變化事件
    htmlCodeCodeMirror.on("change", function (cm) {
      // 编辑器中的内容設置到 textarea 中
      htmlCode[i].value = cm.getValue();
    });
    jsCodeCodeMirror.on("change", function (cm) {
      // 编辑器中的内容設置到 textarea 中
      jsCode[i].value = cm.getValue();
    });

    resultIframe[i].contentDocument.body.innerHTML =
      htmlCode[i].value +
      `<style>*{margin:0;font-size:1.5rem;margin-bottom:.5rem}</style>`; // save HTML code
    resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code
  });
}

// 第二版
/*
try {
  for (let i = 0; i < jsCodeRun.length; i++) {
    jsCodeRun[i].addEventListener("click", () => {
      consoleIframe[i].contentDocument.body.innerHTML = ""; // reset
      resultIframe[i].contentDocument.body.innerHTML = ""; // reset
      resultIframe[i].contentDocument.body.innerHTML = htmlCode[i].value; // save HTML code
      resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code
      // find the 註解 from JS
      let JSlines = jsCode[i].value.split("\n");
      const jscodeLines = JSlines.filter((lines) => lines.trim() !== "");
      // if have console
      const handleConsole = (code) => {
        // get console.log(data)
        const hadleLogValue = (msg) => {
          // get console data , 是否有其他種寫法
          // console.log('data') => 移除除了 data 外的字串
          const consoleValue = msg
            .replace('console.log("', "")
            .replace('",', "")
            .replace('"', "")
            .replace(");", "");
          return consoleValue;
        };
        // 確定還有 console.log
        consoleIframe[
          i
        ].contentDocument.body.innerHTML += `<pre style='  border-bottom: 1px solid #fff;  font-size: 1.3rem;padding-bottom: 0.5rem;'>${hadleLogValue(
          code
        )}</pre>`; // 可以將資訊顯示在consoleIframe
        // console.log(jscodeLines[j]); // get all console.log
      };

      // if have loop
      const handleLoop = (code) => {
        let fun = new Function(code);
        fun();
        consoleIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code
      };

      // check includes if srt
      if (jsCode[i].value.includes("for")) {
      }
      // get console value
      for (let j = 0; j < jscodeLines.length; j++) {
        // check includes console srt
        if (jscodeLines[j].includes("console.log")) {
          handleConsole(jscodeLines[j]);
        }
      }
    });
  }
} catch (e) {
  console.error(e);
}
*/

// 第一版
/*
  function runCode() {
  console.log(this);
  const htmlCode = document.querySelectorAll(".html-code");
  const jsCode = document.querySelectorAll(".js-code");
  const resultIframe = document.querySelectorAll(".js-result-iframe");
  const consoleIframe = document.querySelectorAll(".js-console-iframe");
  for (let i = 0; i < resultIframe.length; i++) {
    console.log(resultIframe.length);
    consoleIframe[i].contentDocument.body.innerHTML = ""; // reset
    resultIframe[i].contentDocument.body.innerHTML = ""; // reset
    resultIframe[i].contentDocument.body.innerHTML = htmlCode[i].value; // save HTML code
    resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code

    // find the 註解 from JS
    let JSlines = jsCode[i].value.split("\n");
    const jscodeLines = JSlines.filter((lines) => lines.trim() !== "");
    // get console value
    for (let j = 0; j < jscodeLines.length; j++) {
      // check includes console srt
      if (jscodeLines[j].includes("console.log")) {
        // get console.log(data)
        console.log = function (msg) {
          // get console data , 是否有其他種寫法
          hadleLogValue = (msg) => {
            // console.log('data') => 移除除了 data 外的字串
            const consoleValue = msg
              .replace('console.log("', "")
              .replace('");', "");
            return consoleValue;
          };
          consoleIframe[i].contentDocument.body.innerHTML += `${hadleLogValue(
            jscodeLines[j]
          )}<br>`; // 可以將資訊顯示在consoleIframe
        };
        console.log(jscodeLines[j]); // get all console.log
      }
    }
  }
}
*/
