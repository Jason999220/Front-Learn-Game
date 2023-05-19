import { def } from "./common.js";

try {
  for (let i = 0; i < jsCodeRun.length; i++) {
    jsCodeRun[i].addEventListener("click", () => {
      consoleIframe[i].contentDocument.body.innerHTML = ""; // reset
      resultIframe[i].contentDocument.body.innerHTML = ""; // reset
      resultIframe[i].contentDocument.body.innerHTML = htmlCode[i].value; // save HTML code
      resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code
      console.log(jsCode[i].value);
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
