const htmlBlock = document.querySelectorAll(".html-block");
const jsBlock = document.querySelectorAll(".js-block");
const resize = document.querySelectorAll(".resize");

const resizeBlock = () => {
  console.log("@");
};
for (let i = 0; i < resize.length; i++) {
  resize[i].addEventListener("click", (event) => {
    // htmlBlock[i].style["width"] = "300px";
    console.log(event.clientX);
  });
  htmlBlock[i].addEventListener("click", resizeBlock);

  jsBlock[i].addEventListener("mousedown", resizeBlock);
}
