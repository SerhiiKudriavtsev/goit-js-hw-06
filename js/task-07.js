const fontSizeControl = document.querySelector("#font-size-control");
const textSize = () =>  document.querySelector("#text").style.fontSize = fontSizeControl.value + "px"; 
fontSizeControl.addEventListener("change", textSize);