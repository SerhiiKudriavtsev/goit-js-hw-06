const enterInput = document.querySelector('#validation-input');
const validColor = () => {
  if (enterInput.value.trim().length === Number(enterInput.getAttribute("data-length"))) {
    enterInput.classList.add("valid");
    enterInput.classList.remove("invalid");
  }
  else {
    enterInput.classList.add("invalid");
    enterInput.classList.remove("valid");
  }
}
enterInput.addEventListener("blur", validColor);