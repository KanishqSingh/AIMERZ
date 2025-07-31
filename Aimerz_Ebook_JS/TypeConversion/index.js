
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




  let cleanedPhoneNumber = String(phoneInput).replace(/D/g, ''); 

  // Ensure the phone number has exactly 10 digits
  if (cleanedPhoneNumber.length === 10) {
    console.log("Valid phone number:", cleanedPhoneNumber);  // "5551234567"
  } else {
    console.log("Invalid phone number format");
  }


function formatPriceFromApiResponse(apiResponse) {

  const priceAsNumber = parseFloat(apiResponse.price);
  

  const formattedPrice = `$${priceAsNumber.toFixed(2)}`;  

  return formattedPrice;
}


const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", 
  available: true
};

console.log(formatPriceFromApiResponse(apiResponse));  


function storeUserData(user) {

  let userJson = JSON.stringify(user);
  
 
  localStorage.setItem("user", userJson);

  console.log("User data stored in local storage.");
}


let user = { name: "Alice", age: 30 };
storeUserData(user);



function getCurrentDateString() {
  
  let currentDate = new Date();
  

  let currentDateString = currentDate.toString();

  return currentDateString;
}


console.log(getCurrentDateString());


const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

function displayUsers(users) {
  console.log("List of Users:");
  users.forEach((user, index) => {
    console.log(index + 1);
    console.log(user.name);
    console.log(user.age);
    console.log(user.email);
    console.log("------------------------");
  });
}

displayUsers(users);





