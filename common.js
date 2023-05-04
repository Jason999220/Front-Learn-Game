// 搜尋區
const search = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

// 結果區
const result = document.getElementById("result");
const outside = document.getElementById("outside");
const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");
const content = document.getElementById("content");

// 存放所有程式碼片段
let codeBox = [
  "height",
  "width",
  "border",
  "boxShadow",
  "background",
  "padding",
  "margin",
  "outline",
];

// 取得搜尋資料
search.addEventListener("change", (event) => {
  let searchText = new RegExp(event.target.value, "gi");

  // 用一個咚咚記錄所有程式碼區資料，再從中用模糊搜尋法尋找資料
  let resultArr = codeBox.filter((item) => {
    return item.match(searchText);
  }); // 可以取得要查詢的程式片段
});
