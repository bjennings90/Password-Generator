// Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}



// console.log(upperCase)
function generatePassword() {
  //Prompt people to choose character options
  var passLength = ""

  while (isNaN(parseInt(passLength)) || parseInt(passLength) < 8 || parseInt(passLength) > 128) {
    passLength = prompt("Your password needs to be between 8 and 128 characters.");
  }
 
  var lowerCaseCharacters = confirm("Do you want to have lowercase letters in your password?");
  var upperCaseCharacters = confirm("Do you want to have uppercase letters in your password?");
  var numberCharacters = confirm("Do you want to have numbers in your password?");
  var specialCharacters = confirm("Do you want to have special characters in your password?");

var characters = ""

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "0123456789"
var specialChar = "!@#$%^&*()_+="

if (lowerCaseCharacters) {
  characters += lowerCase
}

if (upperCaseCharacters) {
  characters += upperCase
}

if (numberCharacters) {
  characters += numbers
}

if (specialCharacters) {
  characters += specialChar
}
console.log(characters)

// Math.floor(Math.random() * (max-min +1) + min);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

