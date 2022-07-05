// const fontSizeControl = document.querySelector("#font-size-control");
// const textSize = () =>  document.querySelector("#text").style.fontSize = fontSizeControl.value + "px";
// fontSizeControl.addEventListener("change", textSize);
// Розписав більш розгорнуто:
const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
fontSizeControl.addEventListener("change", function () {
  textSize.style.fontSize = this.value + "px";
});