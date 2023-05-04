let canvas = document.querySelector("#canvas");
let btn = document.querySelector("#button");

const randomColor = () => {
  let val = "1234567890ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash = hash + val[Math.ceil(Math.random() * 16)];
  }
  return hash;
};

btn.addEventListener("click", () => {
  canvas.style.backgroundColor = randomColor();
});
