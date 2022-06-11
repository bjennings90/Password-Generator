// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialChar = ["#","%","!","@","&","$"]
console.log(upperCase)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //Prompt people to to choose character options
  var promptPassword = prompt("What number of characters do you want your password to be?");
  if (promptPassword < 8) {
    alert("Your password needs to be between 8 and 128 characters.");
    return;
  }
  if (promptPassword > 128) {
    alert("Your password needs to be between 8 and 128 characters.");
    return;
  }

  var lowerCaseCharacters = confirm("Do you want to have lowercase letters in your password?");
  var upperCaseCharacters = confirm("Do you want to have uppercase letters in your password?");
  var numberCharacters = confirm("Do you want to have numbers in your password?");
  var specialCharacters = confirm("Do you want to have special charachters in your password?");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
