//requirements:
//let password be between 8-128 characters in length
//choose if you would like to include upper case letters
//choose if you would like to include lower case letters
//choose if you would like to include numbers
//choose if you would like to include special characters


let generateBtn = document.querySelector("#generate");

// add event listener to generate button
generateBtn.addEventListener("click", writePassword)

let specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//command prompts that ask for a users after 'Generate Password' is clicked
function generatePassword() {
  var passwordLength = window.prompt("Password length needed. Passwords can be bettwen 8 to 128 characters.");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters, please try again!")
      var passwordLength = window.prompt("Password length needed. Passwords can be bettwen 8 to 128 characters.");
    }
  var numbers      = confirm("Do you want numbers in your password, click ok.");  
  var lowerCase    = confirm("Do you want lower case letters in your password, click ok.");
  var upperCase    = confirm("Do you want UPPER case letters in your password, click ok.");
  var specialCharc = confirm("Do you want special characters in your password, click ok.");
    if (numbers === false && lowerCase === false && upperCase === false && specialCharc === false) {
      alert("You must choose one criteria. Please, try again.")
      passwordText.value = "";
    }

//set minumum counts for password generation | min req is 8 characters
  var minCount       =  1;
  var minNumbers     = "2";
  var minLowerCase   = "2";
  var minUpperCase   = "2";
  var minSpecialChar = "2";

//functions for password generation
  var pgArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialChar: function(){
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

//validate user inputs and apply minumums where needed
  if (numbers === true) {
    minNumbers = pgArray.getNumbers();
    minCount++;
  }

  if (lowerCase === true) {
    minLowerCase = pgArray.getLowerCases();
    minCount++;
  }

  if(upperCase === true) {
    minUpperCase = pgArray.getUpperCases();
    minCount++;
  }

  if(specialCharc === true) {
    minSpecialChar = pgArray.getSpecialChar();
    minSpecialChar;
  }

//empty variable needed for password generation
var passwordGen = "";

//loop to compile random characters
for (let i = 0; i < (parseInt(passwordLength) - minCount); i++) {
  var randomNum = Math.floor(Math.random() * 4);

 passwordGen += randomNum;

  }

 //compile final password by adding the criteria together  
  passwordGen += minNumbers;
  passwordGen += minLowerCase;
  passwordGen += minUpperCase;
  passwordGen += minSpecialChar;

  return passwordGen;

}



