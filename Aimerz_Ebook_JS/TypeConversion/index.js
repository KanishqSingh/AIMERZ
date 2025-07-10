
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
