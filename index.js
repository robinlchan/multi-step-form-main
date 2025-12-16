const form = document.querySelector("form");
// Form steps
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const step5 = document.querySelector("#step5");
// Sidebar steps
const num1 = document.querySelector("#num1");
const mobile1 = document.querySelector("#mobile1");
const num2 = document.querySelector("#num2, #mobile2");
const mobile2 = document.querySelector("#mobile2");
const num3 = document.querySelector("#num3, #mobile3");
const mobile3 = document.querySelector("#mobile3");
const num4 = document.querySelector("#num4, #mobile4");
const mobile4 = document.querySelector("#mobile4");
// Buttons
const mobileBack = document.querySelector(".mobile-backNext");
const mobileNext = document.querySelector(".mobile-next");
const confirmBtn = document.querySelectorAll(".confirm-btn");
// Errors
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");

form.setAttribute("novalidate", "");
// Event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateStep1();
});
// Active states display
function activate(step, num, mobileNum) {
  if (!step.classList.contains("active")) {
    step.classList.add("active");
    num.classList.add("active-number");
    mobileNum.classList.add("active-number");
  }
}
activate(step1, num1, mobile1);

function deActivate(step, num, mobileNum) {
  if (step.classList.contains("active")) {
    num.classList.remove("active-number");
    mobileNum.classList.remove("active-number");
  }
}
// Step 1 - Error handling
function showError(input, error) {
  input.classList.add("error");
  error.classList.remove("hidden");
  input.style.border = "1px solid var(--primary-red-500)";
  return false;
}
function removeError(input, error) {
  input.classList.remove("error");
  error.classList.add("hidden");
  input.style.border = "";
  return true;
}
// Validation
function validateStep1() {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const namePattern = /^[a-zA-Z\s'-]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{10}$/;
  if (nameValue.trim() === "" || !namePattern.test(nameValue)) {
    showError(nameInput, nameError);
  } else {
    removeError(nameInput, nameError);
  }
  if (emailValue.trim() === "" || !emailPattern.test(emailValue)) {
    showError(emailInput, emailError);
  } else {
    removeError(emailInput, emailError);
  }
  if (phoneValue.trim() === "" || !phonePattern.test(phoneValue)) {
    showError(phoneInput, phoneError);
  } else {
    removeError(phoneInput, phoneError);
  }
  // Submit form
  const oneInputs = step1.querySelectorAll("input");
  const oneInputsArr = Array.from(oneInputs);
  const oneInputsValid = oneInputsArr.every(
    (input) => !input.classList.contains("error")
  );

  if (oneInputsValid) {
    form.addEventListener("submit", () => {
      deActivate(step1, num1, mobile1);
      activate(step2, num2, mobile2);
    });
  } else {
    return false;
  }
}

// Event Listeners on inputs
nameInput.addEventListener("change", () => {
  removeError(nameInput, nameError);
});
emailInput.addEventListener("change", () => {
  removeError(emailInput, emailError);
});
phoneInput.addEventListener("change", () => {
  removeError(phoneInput, phoneError);
});
