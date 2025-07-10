
function validateAge(ageInput) {
    // Convert the input to an integer
    let age = parseInt(ageInput, 10);

    // Check if the age is a valid number and at least 18
    if (isNaN(age) || age < 18) {
        console.log("Age must be a number and at least 18.");
    } else {
        console.log("Age is valid.");
    }
}

// Example usage
let ageInput = "25";  // User input as a string
validateAge(ageInput);



 // Convert to string and remove non-numeric characters
  let cleanedPhoneNumber = String(phoneInput).replace(/D/g, ''); 

  // Ensure the phone number has exactly 10 digits
  if (cleanedPhoneNumber.length === 10) {
    console.log("Valid phone number:", cleanedPhoneNumber);  // "5551234567"
  } else {
    console.log("Invalid phone number format");
  }

