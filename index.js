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
const back4 = document.querySelector("#back4");
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
// Prices
const price = document.querySelector("#subscription-price");
const cost = document.getElementById("total-cost");

form.setAttribute("novalidate", "");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

let total = 0;
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

// STEP 1
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
// STEP 2
function validateStep2() {
  const subscription = document.querySelector(".subscription"); // <h2> step 3
  const proMonthly = document.querySelector("#pro-monthly");
  const proYearly = document.querySelector("#pro-yearly");
  const advMonthly = document.querySelector("#adv-monthly");
  const advYearly = document.querySelector("#adv-yearly");
  const arcMonthly = document.querySelector("#arc-monthly");
  const arcYearly = document.querySelector("#arc-yearly");
  // Costs
  const arcadeM = 9;
  const arcadeY = 90;
  const advancedM = 12;
  const advancedY = 120;
  const proM = 15;
  const proY = 150;
  // Arcade
  if (
    arcade.classList.contains("selected-plan") &&
    arcMonthly.classList.contains("hidden")
  ) {
    subscription.innerText = "Arcade (Yearly)";
    price.innerText = `$${arcadeY}/yr`;
    cost.innerText = `$${arcadeY}/yr`;
    total = arcadeY;
  } else if (
    arcade.classList.contains("selected-plan") &&
    arcYearly.classList.contains("hidden")
  ) {
    subscription.innerText = "Arcade (Monthly)";
    price.innerText = `$${arcadeM}/mo`;
    cost.innerText = `$${arcadeM}/mo`;
    total = arcadeM;
  }
  // Advanced
  if (
    advanced.classList.contains("selected-plan") &&
    advMonthly.classList.contains("hidden")
  ) {
    subscription.innerText = "Advanced (Yearly)";
    price.innerText = `$${advancedY}/yr`;
    cost.innerText = `$${advancedY}/yr`;
    total = advancedY;
  } else if (
    advanced.classList.contains("selected-plan") &&
    advYearly.classList.contains("hidden")
  ) {
    subscription.innerText = "Advanced (Monthly)";
    price.innerText = `$${advancedM}/mo`;
    cost.innerText = `$${advancedM}/mo`;
    total = advancedM;
  }
  // Pro
  if (
    pro.classList.contains("selected-plan") &&
    proMonthly.classList.contains("hidden")
  ) {
    subscription.innerText = "Pro (Yearly)";
    price.innerText = `$${proY}/yr`;
    cost.innerText = `$${proY}/yr`;
    total = proY;
  } else if (
    pro.classList.contains("selected-plan") &&
    proYearly.classList.contains("hidden")
  ) {
    subscription.innerText = "Pro (Monthly)";
    price.innerText = `$${proM}/mo`;
    cost.innerText = `$${proM}/mo`;
    total = proM;
  }

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
// STEP 3
function validateStep3() {
  const addOneM = 1;
  const addTwoM = 2;
  const addOneY = 10;
  const addTwoY = 20;

  const onlineM = document.querySelector("#online-monthly");
  const onlineY = document.querySelector("#online-yearly");
  const storageM = document.querySelector("#storage-monthly");
  const storageY = document.querySelector("#storage-yearly");
  const profileM = document.querySelector("#profile-monthly");
  const profileY = document.querySelector("#profile-yearly");

  function isMonthly(addOn) {
    if (addOn === online) {
      total += addOneM;
    } else if (addOn === storage || addOn === customize) {
      total += addTwoM;
    }
    return (cost.innerText = `$${total}/mo`);
  }
  function isYearly(addOn) {
    if (addOn === online) {
      total += addOneY;
    } else if (addOn === storage || addOn === customize) {
      total += addTwoY;
    }
    return (cost.innerText = `$${total}/yr`);
  }

  const online = document.getElementById("service");
  const storage = document.getElementById("storage");
  const customize = document.getElementById("profile");
  const onlineList = document.getElementById("online");
  const storageList = document.getElementById("larger");
  const customizeList = document.getElementById("customize");

  if (online.checked === true && !onlineM.classList.contains("hidden")) {
    online.classList.add("selected-add");
    onlineList.classList.remove("hidden");
    isMonthly(online);
  } else if (online.checked === true && !onlineY.classList.contains("hidden")) {
    online.classList.add("selected-add");
    onlineList.classList.remove("hidden");
    isYearly(online);
  } else {
    online.classList.remove("selected-add");
    onlineList.classList.add("hidden");
  }

  if (storage.checked === true && !storageM.classList.contains("hidden")) {
    storage.classList.add("selected-add");
    storageList.classList.remove("hidden");
    isMonthly(storage);
  } else if (
    storage.checked === true &&
    !storageY.classList.contains("hidden")
  ) {
    storage.classList.add("selected-add");
    storageList.classList.remove("hidden");
    isYearly(storage);
  } else {
    storage.classList.remove("selected-add");
    storageList.classList.add("hidden");
  }

  if (customize.checked === true && !profileM.classList.contains("hidden")) {
    customize.classList.add("selected-add");
    customizeList.classList.remove("hidden");
    isMonthly(customize);
  } else if (
    customize.checked === true &&
    !profileY.classList.contains("hidden")
  ) {
    customize.classList.add("selected-add");
    customizeList.classList.remove("hidden");
    isYearly(customize);
  } else {
    customize.classList.remove("selected-add");
    customizeList.classList.add("hidden");
  }
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
    validateStep3();
    nextStep();
  });
});
confirmBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    nextStep();
  });
});
backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    prevStep();
  });
});

toggleBtn.addEventListener("click", () => {
  const monthly = document.querySelectorAll(".monthly-sub");
  const yearly = document.querySelectorAll(".yearly-sub, .yearly");
  const yearlyAddOn = document.querySelectorAll(".yearly-add");
  const monthlyAddOn = document.querySelectorAll(".monthly-add");
  const pricesCostM = document.querySelectorAll(".monthly-cost");
  const pricesCostY = document.querySelectorAll(".yearly-cost");

  function toggleSub(monthVal, yearVal) {
    monthVal.forEach((month) => {
      month.classList.toggle("hidden");
    });
    yearVal.forEach((year) => {
      year.classList.toggle("hidden");
    });
  }

  toggleSub(monthly, yearly);
  toggleSub(monthlyAddOn, yearlyAddOn);
  toggleSub(pricesCostM, pricesCostY);
});

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

const change = document.querySelector(".change");
change.addEventListener("click", () => {
  prevStep();
  prevStep();
});
