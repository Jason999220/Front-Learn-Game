const jsResult = document.querySelectorAll(".js-result");
const jsResultText = document.querySelectorAll(".js-result-text");
const input = document.querySelectorAll("input");
const handleOutput = document.querySelectorAll(".js-output");
const typeFinish = document.getElementById("type-finish");
const x = () => {
  alert("click me");
};
for (let i = 0; i < handleOutput.length; i++) {
  handleOutput[i].addEventListener("click", () => {
    jsResultText[i].style.opacity = 1;
  });
}

const runCode = () => {
  const htmlCode = document.querySelectorAll(".html-code");
  const jsCode = document.querySelectorAll(".js-code");
  const resultIframe = document.querySelectorAll(".js-result-iframe");
  const consoleIframe = document.querySelectorAll(".js-console-iframe");
  for (let i = 0; i < resultIframe.length; i++) {
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
          // get console data
          hadleLogValue = (msg) => {
            // console.log('data') => 移除除了 data 外的字串
            const consoleValue = msg
              .replace('console.log("', "")
              .replace('");', "");
            return consoleValue;
          };
          consoleIframe[i].contentDocument.body.innerHTML += `${hadleLogValue(
            msg
          )}<br>`; // 可以將資訊顯示在consoleIframe
        };
        console.log(jscodeLines[j]); // get all console.log
      }
    }
  }
};
