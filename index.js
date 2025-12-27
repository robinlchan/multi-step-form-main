const form = document.querySelector("form");
// Form steps
const step1 = document.querySelector("#step1");
const step2 = document.querySelector("#step2");
const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const step5 = document.querySelector("#step5");
// Step 2
const arcade = document.querySelector(".arcade");
const advanced = document.querySelector(".advanced");
const pro = document.querySelector(".pro");
const plans = document.querySelectorAll(".plan");
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
const next1 = document.querySelectorAll(".next1");
const next2 = document.querySelectorAll(".next2");
const next3 = document.querySelectorAll(".next3");
const backBtns = document.querySelectorAll(".back-btn");
const confirmBtn = document.querySelectorAll(".confirm-btn");
const toggleBtn = document.querySelector(".slider-round");
const checkbox = document.querySelectorAll(".checkmark");
// Errors
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const phoneError = document.querySelector("#phone-error");

form.setAttribute("novalidate", "");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let currentStep = 0;
let currentNum = 0;
const steps = document.querySelectorAll(".form-step");
const desktopNums = document.querySelectorAll(".desktop");
const mobileNums = document.querySelectorAll(".mobile");
// Active form step
function showStep(stepIndex) {
  steps.forEach((step) => {
    step.classList.remove("active");
  });
  steps[stepIndex].classList.add("active");
}
function showNum(numIndex) {
  desktopNums.forEach((num) => {
    num.classList.remove("active-number");
  });
  desktopNums[numIndex].classList.add("active-number");
}
function mobileShowNum(numIndex) {
  mobileNums.forEach((num) => {
    num.classList.remove("active-number");
  });
  mobileNums[numIndex].classList.add("active-number");
}
// Back and next button logic
function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
    currentNum++;
    showNum(currentNum);
    mobileShowNum(currentNum);
  }
}
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
    currentNum--;
    showNum(currentNum);
    mobileShowNum(currentNum);
  }
}
// Step 1
function validateStep1() {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const phoneValue = phoneInput.value;
  const namePattern = /^[a-zA-Z\s'-]+$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phonePattern = /^\d{10}$/;

  function showError(input, error) {
    input.classList.add("error");
    error.classList.remove("hidden");
    input.style.border = "1px solid var(--primary-red-500)";
  }
  function removeError(input, error) {
    input.classList.remove("error");
    error.classList.add("hidden");
    input.style.border = "";
  }

  nameInput.addEventListener("input", () => {
    removeError(nameInput, nameError);
  });
  emailInput.addEventListener("input", () => {
    removeError(emailInput, emailError);
  });
  phoneInput.addEventListener("input", () => {
    removeError(phoneInput, phoneError);
  });

  let isValid = true;
  if (nameValue.trim() === "" || nameValue.trim() === null) {
    showError(nameInput, nameError);
    isValid = false;
  } else if (!namePattern.test(nameValue)) {
    showError(nameInput, nameError);
    nameError.innerText = "Please enter a first and last name";
    isValid = false;
  } else {
    removeError(nameInput, nameError);
  }
  if (emailValue.trim() === "" || emailValue.trim() === null) {
    showError(emailInput, emailError);
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    showError(emailInput, emailError);
    emailError.innerText = "Must be a valid email address";
    isValid = false;
  } else {
    removeError(emailInput, emailError);
  }
  if (phoneValue.trim() === "" || phoneValue.trim() === null) {
    showError(phoneInput, phoneError);
    isValid = false;
  } else if (!phonePattern.test(phoneValue)) {
    showError(phoneInput, phoneError);
    phoneError.innerText = "Must be a 10 digit phone number";
    isValid = false;
  } else {
    removeError(phoneInput, phoneError);
  }
  return isValid;
}
// Step 2
function validateStep2() {
  function showError(plan) {
    plan.style.border = "1px solid var(--primary-red-500)";
  }
  function removeError(plan) {
    plan.style.border = "";
  }

  plans.forEach((plan) => {
    plan.addEventListener("click", () => {
      if (plan === arcade) {
        arcade.classList.add("selected-plan");
        advanced.classList.remove("selected-plan");
        pro.classList.remove("selected-plan");
        removeError(arcade);
        removeError(advanced);
        removeError(pro);
      } else if (plan === advanced) {
        advanced.classList.add("selected-plan");
        arcade.classList.remove("selected-plan");
        pro.classList.remove("selected-plan");
        removeError(arcade);
        removeError(advanced);
        removeError(pro);
      } else {
        pro.classList.add("selected-plan");
        arcade.classList.remove("selected-plan");
        advanced.classList.remove("selected-plan");
        removeError(arcade);
        removeError(advanced);
        removeError(pro);
      }
    });
  });

  let isValid = true;
  if (
    !arcade.classList.contains("selected-plan") &&
    !advanced.classList.contains("selected-plan") &&
    !pro.classList.contains("selected-plan")
  ) {
    showError(arcade);
    showError(advanced);
    showError(pro);
    isValid = false;
  } else {
    removeError(arcade);
    removeError(advanced);
    removeError(pro);
  }
  return isValid;
}
// Step 3
function validateStep3() {
  const subPrice = document.getElementById("subscription-price"); //price <p>
  const subscription = document.querySelector(".subscription"); // <h2> step 3

  let isMonthly = true;
  if (arcade.classList.contains("selected-plan, monthly-sub")) {
    subPrice.innerText = "$9/mo";
    subscription.innerText = "Arcade (Monthly)";
  } else if (arcade.classList.contains("selected-plan, yearly-sub")) {
    subPrice.innerText = "$90/yr";
    subscription.innerText = "Arcade (Yearly)";
    isMonthly = false;
  } else if (advanced.classList.contains("selected-plan, monthly-sub")) {
    subPrice.innerText = "$12/mo";
    subscription.innerText = "Advanced (Monthly)";
  } else if (advanced.classList.contains("selected-plan, yearly-sub")) {
    subPrice.innerText = "$120/yr";
    subscription.innerText = "Advanced (Yearly)";
    isMonthly = false;
  } else if (pro.classList.contains("selected-plan, monthly-sub")) {
    subPrice.innerText = "$15/mo";
    subscription.innerText = "Pro (Monthly)";
  } else if (advanced.classList.contains("selected-plan, yearly-sub")) {
    subPrice.innerText = "$150/yr";
    subscription.innerText = "Pro (Yearly)";
    isMonthly = false;
  }
  return isMonthly;
}
// EVENT LISTENERS ON PAGE
document.addEventListener("DOMContentLoaded", (e) => {
  showStep(currentStep);
});
next1.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validateStep1()) {
      nextStep();
    }
  });
});
next2.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (validateStep2()) {
      nextStep();
    }
  });
});
next3.forEach((btn) => {
  btn.addEventListener("click", () => {
    nextStep();
  });
});
confirmBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    nextStep();
  });
});
backBtns.forEach((btn) => {
  btn.addEventListener("click", prevStep);
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
// STEP 3 EVENT LISTENERS
checkbox.forEach((check) => {
  check.addEventListener("click", () => {});
});
