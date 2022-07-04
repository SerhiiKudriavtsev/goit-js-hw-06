let counterValue = 0;
let value = document.querySelector("#value");
const btnDec = document.querySelector('[data-action = "decrement"]');
const btnInc = document.querySelector('[data-action = "increment"]');
const handleClickDec = () => { counterValue -= 1; value.innerHTML = counterValue};
const handleClickInc = () => { counterValue += 1; value.innerHTML = counterValue}; 
btnDec.addEventListener("click", handleClickDec);
btnInc.addEventListener("click", handleClickInc);