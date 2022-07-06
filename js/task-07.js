const fontSizeControl = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");
fontSizeControl.addEventListener("change", function () {
  textSize.style.fontSize = this.value + "px";
});