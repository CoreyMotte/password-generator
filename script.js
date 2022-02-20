// Assignment code here

function generatePassword() {
  // Declaring arrays to contain each character that can be used in a password
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
  var characterArray = ["@", "%", "&", "(", ")", "+", "=", "#"];

  // Prompt user for input on what kind of characters they would like in the password and store response as a variable
  var chartotal = prompt("Please enter the desired length for the password. Value entered must be between 8 and 128.");
  var numbers = confirm("Include numbers?");
  var uppercase = confirm("Include uppercase letters?")
  var lowercase = confirm("Include lowercase letters?")
  var characters = confirm("Include special characters?")

  // Create a blank array to contain the list of all characters the user requested
  var resultChars = [];

  // Create a blank array to store final password values in
  var finalPass = [];

  // Conditional statements to check user input, then add appropriate characters to the blank array resultChars
  if (lowercase){
    resultChars = resultChars.concat(lowerArray)
  }
  if (uppercase){
    resultChars = resultChars.concat(upperArray)
  }
  if (numbers){
    resultChars = resultChars.concat(numberArray);
  }
  if (characters){
    resultChars = resultChars.concat(characterArray);
  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
