// Form validation on the client side

// Inspired by TOP's form validation lesson
// https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript

// Author: Rohit Mehta (@r0hitm)
// Date: 2023-Jan-17

// console.log("form.js loaded");

// Form and input elements
const form = document.querySelector("form");
const email = form.email;
const country = form.country;
const zip = form.zip;
const password = form.password;
const password2 = form.password2;
const submitBtn = document.querySelector("button[type='submit']");

// console.log(form);
// console.log(email);
// console.log(country);
// console.log(zip);
// console.log(password);
// console.log(password2);
// console.log(submitBtn);

// Error elements
const emailError = document.querySelector("#email-error");
const countryError = document.querySelector("#country-error");
const zipError = document.querySelector("#zip-error");
const passwordError = document.querySelector("#password-error");
const password2Error = document.querySelector("#password2-error");
const formInvalidSpan = document.querySelector("#form-invalid");

// console.log(emailError);
// console.log(countryError);
// console.log(zipError);
// console.log(password);
// console.log(password2);

// Validation functions
// Returns true if the input is valid, false otherwise

const validateEmail = _ => {
    // console.log("Validating email");
    if (email.validity.valueMissing) {
        emailError.textContent = "Please enter a valid email address";
        return false;
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = "This is not a valid email address";
        return false;
    }
    else {
        emailError.textContent = "";
        return true;
    }
};

const validateCountry = _ => {
    // console.log("Validating country");
    if (country.validity.valueMissing) {
        countryError.textContent = "Please enter your country of residence";
        return false;
    }
    else {
        countryError.textContent = "";
        return true;
    }
};

const validateZip = _ => {
    // console.log("Validating zip");
    if (zip.validity.tooLong) {
        zipError.textContent = "Zip code is too long. Please enter a valid zip code";
        return false;
    }
    else {
        zipError.textContent = "";
        return true;
    }
};

const validatePassword = _ => {
    // console.log("Validating password");
    if (password.validity.valueMissing) {
        passwordError.textContent = "Please enter a password";
        return false;
    }
    else if (password.validity.tooShort) {
        passwordError.textContent = "Password must be at least 8 characters long";
        return false;
    }
    else {
        passwordError.textContent = "";
        return true;
    }
};

const validatePassword2 = _ => {
    // console.log("Validating password2");
    if (password2.validity.valueMissing) {
        password2Error.textContent = "Please enter your password again";
        return false;
    }
    else if (password2.value !== password.value) {
        password2Error.textContent = "Passwords do not match";
        return false;
    }
    else {
        password2Error.textContent = "";
        return true;
    }
};

// Event listeners
email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
zip.addEventListener("input", validateZip);
password.addEventListener("input", validatePassword);
password2.addEventListener("input", validatePassword2);

form.addEventListener("submit", (e) => {
    // console.log("Form submitted");
    e.preventDefault();
    if (validateEmail() && validateCountry() && validateZip() && validatePassword() && validatePassword2()) {
        alert("Congratulations! You have successfully submitted the form.");
    }
    else {
        formInvalidSpan.textContent = "Form is invalid. Please fix the errors and try again.";
    }
});