// 給需要HTML的區塊使用
const jsResult = document.querySelectorAll(".js-result");
// const jsResultText = document.querySelectorAll(".js-result-text");
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
// const handleOutput = document.querySelectorAll(".js-output");
const htmlCode = document.querySelectorAll(".html-code");
const jsCode = document.querySelectorAll(".js-code");
const resultIframe = document.querySelectorAll(".css-result-iframe");

// 第三版
for (let i = 0; i < jsCodeRun.length; i++) {
  jsCodeRun[i].addEventListener("click", () => {
    resultIframe[i].contentDocument.body.innerHTML = ""; // reset
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
