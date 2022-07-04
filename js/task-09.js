function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector(".change-color");
const color = document.querySelector(".color");
changeColor.addEventListener("click", handleClick);
function handleClick() {
  const currentColor = getRandomHexColor();
  // changeColor.setAttribute("background-color", currentColor);
  changeColor.style.backgroundColor = currentColor;
  color.innerHTML = currentColor;
}
