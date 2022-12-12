"use strict";

const accountError = document.getElementById("account-error");
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const urlError = document.getElementById("url-error");
const submitError = document.getElementById("submit-error");
const submitOk = document.getElementById("submit-ok");

const successIcon = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;

function checkAccountType() {
  const account = document.getElementById("contact-account");
  if (account.value !== undefined && account.value !== "") {
    accountError.innerHTML = `${successIcon}`;
    return true;
  }
  accountError.innerHTML = "Choose account type please!";
  return false;
}

function checkName() {
  const name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = `${successIcon}`;
  return true;
}

function checkPhone() {
  const phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }
  if (phone.length <= 6) {
    phoneError.innerHTML = "Phone number should be minimum 7 digits";
    return false;
  }
  if (
    !phone.match(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/)
  ) {
    phoneError.innerHTML = `Only digits please`;
    return false;
  }
  phoneError.innerHTML = `${successIcon}`;
  return true;
}

function checkEmail() {
  const email = document.getElementById("contact-email").value;

  if (email.lenght == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = `${successIcon}`;
  return true;
}

function checkUrl() {
  const url = document.getElementById("contact-url").value;

  if (url.length == 0) {
    urlError.innerHTML = "URL is required";
    return false;
  }
  if (
    !url.match(
      /[-a-zA-Z0-9@:%_\+.~#?&\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/=]*)?/gi
    )
  ) {
    urlError.innerHTML = "URL invalid";
    return false;
  }
  urlError.innerHTML = `${successIcon}`;
  return true;
}

function checkForm(e) {
  const isCorrectForm =
    checkAccountType() &&
    checkName() &&
    checkPhone() &&
    checkEmail() &&
    checkUrl();
  if (isCorrectForm === false) {
    submitError.style.display = "block";
    // submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
  // submitOk.innerHTML = "Thank you! We will contact you soon!";
  // setTimeout(function () {
  //   submitOk.style.display = "none";
  // }, 5000);
  // alert("Thank you! We will contact you soon!");
  submitOk.innerHTML = "Thank you! We will contact you soon!";
  setTimeout(function () {
    location.reload();
  }, 3000);
}

// //ACCOUNT BUG
// function validateAccount() {
//   const account = document.getElementById("account-name").value;
//   if (account.length == 0 || account.length <= 7) {
//     accountError.innerHTML = "Account type is required";
//     return false;
//   }
//   if (!account.match(/^[а-яА-ЯёЁa-zA-Z]+$/)) {
//     accountError.innerHTML = "Write full account type";
//     return false;
//   }

//   accountError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
//   return true;
// }

// // FULL NAME BUG
// function validateName() {
//   const name = document.getElementById("contact-name").value;

//   if (name.length == 0) {
//     nameError.innerHTML = "Name is required";
//     return false;
//   }
//   if (!name.match(/^[а-яА-ЯёЁa-zA-Z]+ [а-яА-ЯёЁa-zA-Z]+ ?[а-яА-ЯёЁa-zA-Z]+$/)) {
//     nameError.innerHTML = "Write full name";
//     return false;
//   }
//   nameError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
//   return true;
// }

// // PHONE NUMBER BUG
// function validatePhone() {
//   const phone = document.getElementById("contact-phone").value;

//   if (phone.length == 0) {
//     phoneError.innerHTML = "Phone number is required";
//     return false;
//   }
//   if (phone.length <= 6) {
//     phoneError.innerHTML = "Phone number should be minimum 7 digits";
//     return false;
//   }
//   if (
//     !phone.match(/^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/)
//   ) {
//     phoneError.innerHTML = `Only digits please`;
//     return false;
//   }
//   phoneError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
//   return true;
// }

// // EMAIL BUG
// function validateEmail() {
//   const email = document.getElementById("contact-email").value;

//   if (email.lenght == 0) {
//     emailError.innerHTML = "Email is required";
//     return false;
//   }
//   if (!email.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/)) {
//     emailError.innerHTML = "Email invalid";
//     return false;
//   }
//   emailError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
//   return true;
// }

// // URL BUG
// function validateUrl() {
//   const url = document.getElementById("contact-url").value;

//   if (url.length == 0) {
//     urlError.innerHTML = "Url is required";
//     return false;
//   }
//   urlError.innerHTML = `<i class="fa-sharp fa-solid fa-circle-check"></i>`;
//   return true;
// }

// function validateForm() {
//   if (
//     !checkAccountType ||
//     !validateName() ||
//     !validatePhone() ||
//     !validateEmail() ||
//     !validateUrl()
//   ) {
//     submitError.style.display = "block";
//     submitError.innerHTML = "Please fix error to submit";
//     setTimeout(function () {
//       submitError.style.display = "none";
//     }, 3000);
//     return false;
//   }
//   submitOk.innerHTML = "Thank you! We will contact you soon!";
//   setTimeout(function () {
//     submitOk.style.display = "none";
//   }, 5000);
//   return true;
// }
