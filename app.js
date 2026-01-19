const inputPasswordShow = document.getElementById("inputPasswordShow");

const lengthPassword = document.getElementById("lengthPassword");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeLowerCase = document.getElementById("includeLowerCase");
const includNumber = document.getElementById("includNnumber");
const includSymbols = document.getElementById("includSymbols");

const generateButton = document.querySelector(".generate-btn");

generateButton.addEventListener("click", () => {
  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const number = "1234567890";
  const symbols = "!@$%&*";
  const length = parseInt(lengthPassword.value);
  let show = "";

  let password = "";
  let indexLength = null;

  if (includeUpperCase.checked) {
    password += upper;
    indexLength += upper.length;
  }
  if (includeLowerCase.checked) {
    password += lower;
    indexLength += lower.length;
  }
  if (includNumber.checked) {
    password += number;
    indexLength += number.length;
  }
  if (includSymbols.checked) {
    password += symbols;
    indexLength += symbols.length;
  }
  // Error S
  if (password.length == 0) {
    inputPasswordShow.value = "You didn't choose anything";
    return;
  }
  // type
  for (let i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * indexLength);
    show += password[random];
  }
  inputPasswordShow.value = show;
});
