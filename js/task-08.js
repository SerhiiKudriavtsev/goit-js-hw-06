const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  const elements = { email: email.value, password: password.value, };
  if (email.value === "" || password.value === "") {
    return alert("Будь ласка, заповни всі поля!");
  }
  console.log(elements);
  event.currentTarget.reset();
}

