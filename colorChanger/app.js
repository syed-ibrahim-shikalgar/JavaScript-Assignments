// wiring

const canvas = document.getElementById("canvas");
const ctaBtn = document.getElementById("button");

// array of color
const colorArray = [
  "#C0C0C0",
  "#808080",
  "#000000",
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#008080",
  "#0000FF",
  "#000080",
  "#FF00FF",
  "#800080",
  "#FFBF00",
];

// Counter
counter = 0;

// Callback fn
function changeBG() {
  let colorNum = colorArray[counter];
  canvas.style.backgroundColor = colorNum;
  counter === colorArray.length ? (counter = 0) : counter++;
}

// event
ctaBtn.addEventListener("click", changeBG());
