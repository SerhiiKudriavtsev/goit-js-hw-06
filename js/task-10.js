function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
const arrDiv = [];
const minNumber = Number(input.getAttribute("min"));
const maxNumber = Number(input.getAttribute("max"));
function createBoxes(amount) {
  if (input.value < minNumber || input.value > maxNumber) {
    alert("Прошу вибрати число від " + minNumber + " до " + maxNumber);
  }
  else {
    amount = input.value;
    let increase = 0;
    for (let i = 0; i < amount; i += 1) {
      const sideLength = (30 + increase) + "px";
      const div = document.createElement("div");
      div.style.width = sideLength;
      div.style.height = sideLength;
      div.style.backgroundColor = getRandomHexColor();
      arrDiv.push(div);
      increase += 10;
    }
  }
  boxes.append(...arrDiv);
}

function destroyBoxes() {
  for (let i = 0; i < arrDiv.length; i += 1) {
    arrDiv[i].remove();
  }
  arrDiv.length = 0;
  input.value = "";
}