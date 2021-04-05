const inputEmailField = document.getElementById("input-email");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
// const errorMsg = document.getElementById("error-msg");
const regEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]*$/;

submitBtn.addEventListener("click", function() {
    inputEmail = inputEmailField.value;

    if (regEx.test(inputEmail)) {
        inputEmailField.classList.remove("input-error-border");
        errorIcon.classList.remove("error");
        errorMsg.classList.remove("error");
    } else {
        inputEmailField.classList.add("input-error-border");
        errorIcon.classList.add("error");
        errorMsg.classList.add("error");
    }
})