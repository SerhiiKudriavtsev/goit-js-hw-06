const enterInput = document.querySelector('#validation-input');
const validColor = () => {
  const actualLength = enterInput.value.trim().length;
  const templateLength = Number(enterInput.getAttribute("data-length"));
  if (actualLength === templateLength) {
    enterInput.classList.add("valid");
    enterInput.classList.remove("invalid");
  }
  else {
    enterInput.classList.add("invalid");
    enterInput.classList.remove("valid");
  }
}
enterInput.addEventListener("blur", validColor);