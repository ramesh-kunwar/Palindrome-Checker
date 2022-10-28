const outputHeading = document.querySelector(".output h2");
const outputParagraph = document.querySelector("p");
const input = document.querySelector("input");
const form = document.querySelector("form");
const button = document.querySelector("button");
const body = document.querySelector("body");

// Reverse givn input
function reverseInput(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  let reversedInput = reverseInput(input.value);
  outputHeading.textContent = inputValue;

  if (inputValue == reversedInput) {
    outputParagraph.textContent = `${inputValue} is a palindrome`;
    body.className = "bg-success";
  } else {
    outputParagraph.textContent = `${inputValue} is not a palindrome`;
    body.className = "bg-danger";
  }
  input.value = "";
  setTimeout(() => {
    body.className = "";
  }, 2000);
});
