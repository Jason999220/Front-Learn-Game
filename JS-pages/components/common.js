// 給不用HTML的區塊使用
const jsResult = document.querySelectorAll(".js-result");
const jsResultText = document.querySelectorAll(".js-result-text");
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const handleOutput = document.querySelectorAll(".js-output");
const typeFinish = document.getElementById("context-span"); // js result context
const jsCode = document.querySelectorAll(".js-code");
const consoleIframe = document.querySelectorAll(".console-iframe");

// 可以移除
for (let i = 0; i < handleOutput.length; i++) {
  handleOutput[i].addEventListener("click", () => {
    jsResultText[i].style.opacity = 1;
  });
}

// 第三版
for (let i = 0; i < jsCodeRun.length; i++) {
  jsCodeRun[i].addEventListener("click", () => {
    consoleIframe[i].contentDocument.body.innerHTML = ""; // reset
    // resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code
    try {
      // 其餘參數 ...args => 不確定參數會有幾個的情況
      console.log = (msg, ...args) => {
        consoleIframe[
          i
        ].contentDocument.body.innerHTML += ` <p style="border-bottom: 1px solid #fff;  font-size: 1.3rem;padding-bottom: 0.5rem">
            ${msg} ${args}
          </p>`; // 在<iframe>中顯示結果
      };
      eval(jsCode[i].value); // 執行當前JS代碼
    } catch (error) {
      alert(error);
      console.log(error); // 在<iframe>中顯示錯誤
      consoleIframe[i].contentDocument.body.innerHTML = error;
    }
  });
}
