const counterDiv = document.querySelector("#counter");

const addText = (text) => {
  let spanText = document.createElement("span");
  spanText.innerText = text;
  document.body.appendChild(spanText);
};
addText("1");
addText("2");
setTimeout(() => {
  addText("3");
}, 2000);

addText("4");
let counterNumber = 0;
let counterInter = setInterval(() => {
  // counterDiv.innerHTML = "";
  counterDiv.textContent = counterNumber;
  if (counterNumber >= 10) {
    clearInterval(counterInter);
  }
  counterNumber++;
}, 1000);

const url = "https://api.chucknorris.io/jokes/random";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data.icon_url))
  .catch((err) => console.error(err));

console.log("Synchroniczny log :)");

const inputPL = document.querySelector("#inp");
let oldValue = "Sprzedaż na aleDrogo";
inputPL.setAttribute("placeholder", oldValue);
