// Assignment code here

function generatePassword() {
  // Declaring arrays to contain each character that can be used in a password
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ];
  var characterArray = ["@", "%", "&", "(", ")", "+", "=", "#"];


  var validInput = false;
  var validLength = false;

  // While loop to ensure the user enters a number between 8 and 128

  while (!validLength){
    var chartotal = prompt("Please enter the desired length for the password. Value entered must be between 8 and 128.");

    // Check if number entered is between 8 and 128
    if ((chartotal > 7) && (chartotal < 129)) {
      validLength = true;
    } else {
      // Warn user that the number entered was not valid
      window.alert("Please enter a number between 8 and 128.")
    }
  }

  // While loop to ensure the user selects at least one type of character for the password

  while (!validInput) {
    // Prompt user for input on what kind of characters they would like in the password and store response as variables
    var numbers = confirm("Include numbers?");
    var uppercase = confirm("Include uppercase letters?")
    var lowercase = confirm("Include lowercase letters?")
    var characters = confirm("Include special characters?")

    // Check that user selected at least one option
    if ((numbers) || (uppercase) || (lowercase) || (characters)) {
      validInput = true;
    } else {
      // Display alert to warn the user that at least one option must be selected
      window.alert("Please select at least one character type for your password.")
    }
  }
  
  // Create a blank array to contain the list of possible characters based on user input
  var resultChars = [];

  // Create a blank array to store final password values in
  var finalPass = [];

  // Conditional statements to check user input, then add appropriate characters to the blank array resultChars with concat function
  if (lowercase){
    resultChars = resultChars.concat(lowerArray);
  }
  if (uppercase){
    resultChars = resultChars.concat(upperArray);
  }
  if (numbers){
    resultChars = resultChars.concat(numberArray);
  }
  if (characters){
    resultChars = resultChars.concat(characterArray);
  }

  // For loop to randomly select characters from resultChars array and append them to the finalPass array
  for (var i = 0; i < chartotal; i++) {
    finalPass.push(resultChars[Math.floor(Math.random() * resultChars.length)]);
  }

  // Log final array to console for debug purposes
  // console.log(finalPass);

  // Combine the characters in finalPass to a string and return it from the function
  return finalPass.join("");
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
