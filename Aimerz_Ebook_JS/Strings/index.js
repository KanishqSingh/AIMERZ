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























  



