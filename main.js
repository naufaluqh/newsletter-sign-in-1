document
  .querySelector("#subscribeBtn")
  .addEventListener("click", function (event) {
    const emailInput = document.getElementById("inputEmail");
    const home = document.querySelector(".home");
    const successInput = document.querySelector(".success-input");
    const errorMessage = document.getElementById("errorMessage");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailInput.value.match(emailPattern)) {
      errorMessage.style.display = "block";
      inputEmail.style.background = "rgba(255, 231, 231, 0.854)";
      emailInput.style.border = "1px solid red";
      event.preventDefault();
    } else {
      errorMessage.style.display = "none";
      emailInput.style.border = "1px solid rgb(233, 217, 217";
      home.style.display = "none";
      successInput.style.display = "block";
    }
  });
