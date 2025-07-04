//Convert a string to a valid number
function convertToNumber(str) {
    const number = Number(str);
    return isNaN(number) ? NaN : number;

}
console.log(convertToNumber("123")); 
console.log(convertToNumber("abc")); 
console.log(convertToNumber("12.34")); 

//Round a number to the nearest integer
function roundNumber(num) {
   return Math.round(num)
}
console.log(roundNumber(4.3)); 
console.log(roundNumber(4.7)); 



  