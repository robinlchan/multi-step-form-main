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
const toggleBtn = document.querySelector(".slider-round");
const arcade = document.querySelector(".arcade");
const advanced = document.querySelector(".advanced");
const pro = document.querySelector(".pro");
const plans = document.querySelectorAll(".plan");
const checkbox = document.querySelectorAll(".checkmark");
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
  validateSteps();
});
// Active states display
function activate(step, num, mobileNum) {
  if (!step.classList.contains("active")) {
    step.classList.add("active");
    num.classList.add("active-number");
    mobileNum.classList.add("active-number");
  }
}
activate(step2, num2, mobile2);

function deActivate(step, num, mobileNum) {
  if (step.classList.contains("active")) {
    step.classList.remove("active");
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
function validateSteps() {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const namePattern = /^[a-zA-Z\s'-]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{10}$/;
  if (nameValue.trim() === "" || nameValue.trim() === null) {
    showError(nameInput, nameError);
  } else if (!namePattern.test(nameValue)) {
    showError(nameInput, nameError);
    nameError.innerText = "Please enter a first and last name";
  } else {
    removeError(nameInput, nameError);
  }
  if (emailValue.trim() === "" || emailValue.trim() === null) {
    showError(emailInput, emailError);
  } else if (!emailPattern.test(emailValue)) {
    showError(emailInput, emailError);
    emailError.innerText = "Must be a valid email address";
  } else {
    removeError(emailInput, emailError);
  }
  if (phoneValue.trim() === "" || phoneValue.trim() === null) {
    showError(phoneInput, phoneError);
  } else if (!phonePattern.test(phoneValue)) {
    showError(phoneInput, phoneError);
    phoneError.innerText = "Must be a 10 digit phone number";
  } else {
    removeError(phoneInput, phoneError);
  }

  const allPlans = Array.from(plans).every((plan) => {
    if (plan.classList.contains("selected-plan")) {
      console.log("There is a selected plan!");
    }
  });
  // // Submit form
  // const oneInputs = step1.querySelectorAll("input");
  // const oneInputsArr = Array.from(oneInputs);
  // const oneInputsValid = oneInputsArr.every(
  //   (input) => !input.classList.contains("error")
  // );

  // if (oneInputsValid) {
  //   form.addEventListener("submit", () => {
  //     deActivate(step1, num1, mobile1);
  //     activate(step2, num2, mobile2);
  //   });
  // } else {
  //   return false;
  // }
}

// STEP 1 EVENT LISTENERS
nameInput.addEventListener("change", () => {
  removeError(nameInput, nameError);
});
emailInput.addEventListener("change", () => {
  removeError(emailInput, emailError);
});
phoneInput.addEventListener("change", () => {
  removeError(phoneInput, phoneError);
});
// STEP 2 EVENT LISTENERS
toggleBtn.addEventListener("click", () => {
  const monthly = document.querySelectorAll(".monthly-sub");
  const yearly = document.querySelectorAll(".yearly-sub, .yearly");
  monthly.forEach((month) => {
    month.classList.toggle("hidden");
  });
  yearly.forEach((year) => {
    year.classList.toggle("hidden");
  });
});

plans.forEach((plan) => {
  plan.addEventListener("click", () => {
    if (plan === arcade) {
      arcade.classList.add("selected-plan");
      advanced.classList.remove("selected-plan");
      pro.classList.remove("selected-plan");
    } else if (plan === advanced) {
      advanced.classList.add("selected-plan");
      arcade.classList.remove("selected-plan");
      pro.classList.remove("selected-plan");
    } else {
      pro.classList.add("selected-plan");
      arcade.classList.remove("selected-plan");
      advanced.classList.remove("selected-plan");
    }
  });
});
// STEP 3 EVENT LISTENERS
checkbox.forEach((check) => {
  check.addEventListener("click", () => {});
});
