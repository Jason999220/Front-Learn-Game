// 給 JS  使用 => 包含物件、陣列
const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const jsCode = document.querySelectorAll(".js-code");
const consoleIframe = document.querySelectorAll(".console-iframe");
const opacityToggle = document.querySelectorAll(".opacity-toggle");

for (let i = 0; i < jsCodeRun.length; i++) {
  jsCodeRun[i].addEventListener("click", () => {
    // opacityToggle[i].style = "opacity: 1";
    consoleIframe[i].contentDocument.body.innerHTML = ""; // reset
    // resultIframe[i].contentWindow.eval(jsCode[i].value); //  save JS code

    try {
      // 使用 JSON.stringify 將全部資料已字串形式存取不然用上面那種方式陣列會消失，但麻煩是變數字串也會直接被印出來
      console.log = (msg, ...args) => {
        consoleIframe[
          i
        ].contentDocument.body.innerHTML += ` <p style="border-bottom: 1px solid #fff;  font-size: 1.3rem;padding-bottom: 0.5rem">
            ${JSON.stringify(msg)}  ${args}
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
