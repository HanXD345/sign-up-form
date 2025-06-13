const password = document.querySelector("#user_password");
const passwordConfirmation = document.querySelector("#user_confirm_password");
const form = document.querySelector("form");

form.onsubmit =  function() {
    if (password !== passwordConfirmation) {
        alert("Passwords don't match!");
        password.textContent = "";
        passwordConfirmation.textContent = "";
        password.style.borderColor = "red";
        passwordConfirmation.style.borderColor = "red";
    }
    return false;
};