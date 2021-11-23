let button = document.querySelector("#button");
let msg = document.querySelector("#message");

button.addEventListener("click", () => {
  msg.classList.toggle("reveal");
});

let button2 = document.querySelector("#button2");
let pic = document.querySelector("#image");

button2.addEventListener("click", () => {
  pic.classList.toggle("reveal");
});

let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");

text2.addEventListener("mouseover", () => {
  text.classList.toggle("reveal");
  text2.classList.toggle("hide");
});

let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");

text3.addEventListener("click", () => {
  text4.classList.toggle("reveal");
  text3.classList.toggle("hide");
});

text4.addEventListener("click", () => {
  text3.classList.toggle("reveal");
  text4.classList.toggle("hide");
});
