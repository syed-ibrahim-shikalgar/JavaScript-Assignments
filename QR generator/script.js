let btn = document.getElementById("submit");
let inputField = document.getElementById("input");
let qrImg = document.getElementById("img");
let preValue = "";
btn.addEventListener("click", () => {
  let qrValue = inputField.value.trim();
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  btn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    btn.innerText = "Generate QR Code";
  });
  qrImg.classList.add("visible");
});
