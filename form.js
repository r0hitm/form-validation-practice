// Form validation on the client side

// Inspired by TOP's form validation lesson
// https://www.theodinproject.com/lessons/node-path-javascript-form-validation-with-javascript

// Author: Rohit Mehta (@r0hitm)
// Date: 2023-Jan-17

// console.log("form.js loaded");

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

