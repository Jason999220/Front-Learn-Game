// // 正則表達式 => Regular Expression

// /*
// \d => [0-9] => 數字
// \D => [^0-9] => 非 數字 的字符
// \w => [0-9a-zA-Z_] => 數字、大小寫字母、下底線
// \W => [^0-9a-zA-Z_] => 非 數字、大小寫字母、下底線 的字符
// /^[a-z]/.test("est test");//true
// /[0-9]$/.test("est test");//false
// /^[^a-z]/.test("est test");//false
// /[0-9]/.test("1est test");//true
// */

// /*
// /pattern/modifiers;

// pattern => 匹配規則
// modifiers => 搜尋的比對方式，g : 查詢全部文本(global match) ，i : 不限大小寫(ignore case)

// version1 : 在script載入時編譯，效能較佳
//     let str = /abc/g
// version2 : new 一個 RegExp物件，較適合動態產生pattern
//     let str = new RegExp('abc',g)
// */

// // 橫向模糊匹配 => 不同數量
// let text1 = /Hel{2,4}o/g;
// let str1 = "Heo Helo Hello Helllo Hellllo Helllllo";
// // console.log(str1.match(text1)); // [ 'Hello', 'Helllo', 'Hellllo' ]

// // 縱向模糊匹配 => 不同情況
// let text2 = /dog[1,2,3]/g;
// let str2 = "dog dog1 dog2 dog3 dog4";
// // console.log(str2.match(text2)); // [ 'dog1', 'dog2', 'dog3' ]

// // array 應用
// let arr1 = ["apple", "orange", "banana"];
// let regexp1 = new RegExp("e", "gi");
// let matchArr = arr1.filter((item) => {
//   return item.match(regexp1);
// });
// // console.log(matchArr); // [ 'apple', 'orange' ]
const box1 = document.getElementById("box1");
for (let i = 0; i < 2; i++) {
  // console.log(i);
  console.log(box1);
}
