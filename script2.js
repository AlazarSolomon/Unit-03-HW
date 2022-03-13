// Assignment Code
var generateBtn = document.querySelector("#generate");

 function generatePassword() {

  var letterOptions = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z' ]; 

  var specialCharacterOptions = [ '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_',
  '+', '=', '?', '>', '<', ',',  '.', '/', '"', ':', ';', '{', '}', '[', ']','[' ]; 

  var numberOptions = [ '0', '1', '2', '3', '4', '5', '6','7','8','9' ]; 

  var lowerCaseOptions = letterOptions.map(element => {
    return element.toLowerCase(); 
  })

  var passwordText = '';

  var characters = window.prompt("How many characters would you like your password to have? (Choose a minimum of 8 characters and maximum of 128 characters)");
  var specialCharacters = window.confirm("Press OK to include special characters.");
  var numbers = window.confirm("Press OK to include numbers.");
  var upperCase = window.confirm("Press OK to include uppercase characters.");
  var lowerCase = window.confirm("Press OK to include lowercase characters.");
  for (let i = 0; i < 128; i++) {
         
            if (specialCharacters) {
                    var index = Math.floor(Math.random() * specialCharacterOptions.length)
                    var computerChoice = specialCharacterOptions[index];
                    passwordText = passwordText + computerChoice;
            }
            if (passwordText.length === Number(characters)) {
              return passwordText;
                  }  
            
            if (numbers) {
                    var index = Math.floor(Math.random() * numberOptions.length)
                    var computerChoice = numberOptions[index];
                    passwordText = passwordText + computerChoice;
            }
            if (passwordText.length === Number(characters)) {
              return passwordText;
                  }  
            if (upperCase){
                  var index = Math.floor(Math.random() * letterOptions.length)
                  var computerChoice = letterOptions[index];
                  passwordText = passwordText + computerChoice;
          }
            if (passwordText.length === Number(characters)) {
              return passwordText;
                  }  
            if (lowerCase){
                  var index = Math.floor(Math.random() * lowerCaseOptions.length)
                  var computerChoice = lowerCaseOptions[index];
                  passwordText = passwordText + computerChoice;
          }
            if (passwordText.length === Number(characters)) {
                    return passwordText;
                        }  
            if (passwordText === '') {
                  window.alert("Password must meet at least one criteria.")
                  return generatePassword();
    } 
        }

return passwordText

  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

 }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
 
