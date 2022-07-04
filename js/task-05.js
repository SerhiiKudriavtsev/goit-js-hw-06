const nameInput = document.querySelector("#name-input");
const nameOuput = document.querySelector('#name-output');
const enteredName = () => {
  if (nameInput.value !== '') {
    nameOuput.innerHTML = nameInput.value;
  }
  else {
    nameOuput.innerHTML = 'Anonymous';
  }
}
nameInput.addEventListener('input', enteredName);