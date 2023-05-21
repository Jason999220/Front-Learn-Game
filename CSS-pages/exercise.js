const jsCodeRun = document.querySelectorAll(".js-code-result-run");
const htmlCode = document.querySelectorAll(".html-code");
const cssCode = document.querySelectorAll(".css-code");
const cssResultIframe = document.querySelectorAll(".css-result-iframe");

// 第三版
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

  // 當點擊時觸發
  jsCodeRun[i].addEventListener("click", () => {
    // cssResultIframe[i].contentDocument.body.innerHTML = ""; // reset
    resultCode = htmlCode[i].value + "<style>" + cssCode[i].value + "</style>";
    cssResultIframe[i].contentDocument.body.innerHTML = resultCode; // save HTML code
    // use localStorage save html and css code
    localStorage.setItem(`storageHmtl${i}`, htmlCode[i].value);
    localStorage.setItem(`storageCss${i}`, cssCode[i].value);
    localStorage.setItem(`storageResult${i}`, resultCode);
  });
}
