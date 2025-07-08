//Valid Password
const password = 'abcd';

function isValidPassword(password){
	if(password.length >= 8){
		return true;
	}else{
		return false;
	}
}

isValidPassword(password) // false


//Count word Occurance
function countOccurrences(str, word) {

    const words = str.split(' ');
    let count = 0;
    console.log(words);
    for(let w of words){
        if(word.toLowerCase() == w.toLowerCase()){
            count = count +1;
        }
    }
    return count;
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);


//Keyword check
function isProductMatch(query, description) {
  if (description.toLowerCase().includes(query.toLowerCase())) {
    console.log("Product matches the search query!");
  }
}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);


//Valid Email
function checkGmailDomain(email, domain) {
  const position = email.indexOf(domain);
  if (position !== -1) {
    console.log("This email is from Gmail.");
  } else {
    console.log("This email is not from Gmail.");
  }
}

const email = "user@example.com"; 
const domain = "@gmail.com";

checkGmailDomain(email, domain);


//Clean up extra spaces
function cleanPhoneNumber(phoneNumber) {
  return phoneNumber.trim();  
}

const phoneNumber = "  +1 234 567 890  ";  
const cleanedPhoneNumber = cleanPhoneNumber(phoneNumber);

console.log(cleanedPhoneNumber);  

//valid url
function convertUrlsToLinks(text) {
  const urlPattern = /(https?:\/\/[^\s]+)/g; 
  return text.replace(urlPattern, (url) => `<a href="${url}" target="_blank">${url}</a>`);
}

let updatedText = convertUrlsToLinks("Visit our website at http://example.com for more information. Also, check out https://google.com for other resources.");
console.log(updatedText);


//url generator
function generateSearchURL(baseURL, searchQuery, categoryFilter) {
  return baseURL.concat("?query=", searchQuery, "&category=", categoryFilter);
}


let baseURL = "https://www.example.com/search";
let searchQuery = "apple";
let categoryFilter = "electronics";

let fullURL = generateSearchURL(baseURL, searchQuery, categoryFilter);
console.log(fullURL);

//valid file extension
function validateFileExtension(fileName) {
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  const isValid = validExtensions.some(extension => fileName.toLowerCase().endsWith(extension));
  console.log(isValid ? "Valid file type. You can upload the file." : "Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.");
}

validateFileExtension("profile-picture.jpg");   
validateFileExtension("document.pdf");


//Search Products

function searchProducts(products, search) {
  return products.filter(product => product.toUpperCase() === search.toUpperCase());
}


let products = ["Apple", "banana", "Orange", "grape", "APPLE"];
let search = "apple";

let searchResult = searchProducts(products, search);
console.log(searchResult); 















































  



