let inputField = document.querySelector("#text");
let button = document.querySelector("#convert-btn");

let camel = document.querySelector("#camel-case");
let pascal = document.querySelector("#pascal-case");
let snake = document.querySelector("#snake-case");
let screamSnake = document.querySelector("#screaming-snake-case");
let kebab = document.querySelector("#kebab-case");
let screamKebab = document.querySelector("#screaming-kebab-case");

button.addEventListener("click", () => {
  camel.textContent = toCamel(inputField.value);
  pascal.textContent = toPascal(inputField.value);
  snake.textContent = toSnake(inputField.value);
  kebab.textContent = toKebab(inputField.value);
  screamSnake.textContent = toScreamSnake(inputField.value);
  screamKebab.textContent = toScreamKebab(inputField.value);
});

function toCamel(sentences) {
  let camel = sentences
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");
  return camel[0].toLowerCase().concat(camel.slice(1));
}

function toPascal(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)))
    .join("");
}

function toSnake(sentence) {
  let snake = sentence
    .split(" ")
    .map((word) => "_".concat(word))
    .join("");
  return snake.replace("_", "");
}

function toKebab(sentence) {
  let kebab = sentence
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return kebab.replace("-", "");
}

function toScreamSnake(sentence) {
  let scream = sentence
    .split(" ")
    .map((word) => "_".concat(word))
    .join("");
  return scream.replace("_", "").toUpperCase();
}

function toScreamKebab(sentence) {
  let scke = sentence
    .split(" ")
    .map((word) => "-".concat(word))
    .join("");
  return scke.replace("-", "").toUpperCase();
}
