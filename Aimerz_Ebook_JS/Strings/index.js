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

//Working with Large Numbers: Formatting and Display
function formatLargeNumber(number) {

    if(number > 1000 && number < 100000 ){
        return (number/1000).toFixed(1) + 'k'
    }else if(number > 100000 && number < 10000000 ){
        return (number/1000000).toFixed(1) + 'M'
    }else{
        return number.toString();
    }
    
}
console.log(formatLargeNumber(1500));  // Output: "1.5K"
console.log(formatLargeNumber(3500000)); // Output: "3.5M"
console.log(formatLargeNumber(950)); // Output: "950"


//Optimizing Price Calculation with Bulk Discount
function calculateBulkDiscount(price, quantity, discountThreshold, discountRate) {

    const totalPrice = price * quantity;
    if(quantity > discountThreshold){
        const discountedPrice = (totalPrice * (100 - discountRate)) / 100;
        return discountedPrice;
    }else{
        return totalPrice;
    }
    
}
console.log(calculateBulkDiscount(50, 15, 10, 10)); // Output: 675
console.log(calculateBulkDiscount(50, 5, 10, 10));  // Output: 250
console.log(calculateBulkDiscount(100, 20, 15, 20)); // Output: 1600
 

//Calculating the Time Remaining for a Sale
function calculateTimeRemaining(startTime, endTime) {
    const start = new Date(startTime);
    const end = new Date(endTime);

    const difference = end - start;
    const totalSeconds = Math.floor(difference / 1000); 
    const hours = Math.floor(totalSeconds / 3600); 
    const minutes = Math.floor((totalSeconds % 3600) / 60); 
    const seconds = totalSeconds % 60; 

    return { hours, minutes, seconds };
}
console.log(calculateTimeRemaining("2024-12-18T00:00:00Z", "2024-12-31T23:59:59Z"));
// Output: { hours: 359, minutes: 59, seconds: 59 }
console.log(calculateTimeRemaining("2024-12-18T12:00:00Z", "2024-12-19T14:30:45Z"));
// Output: { hours: 26, minutes: 30, seconds: 45 }


//Generating a Random Number in a Range
function generateRandomNumber(min, max) {
    
    return Math.floor(Math.random() * (max-min+1)) + min;
}
console.log(generateRandomNumber(1, 10)); // Output: A random number between 1 and 10 (e.g., 7)
console.log(generateRandomNumber(5, 15)); // Output: A random number between 5 and 15 (e.g., 12)
 
//Converting a Number to Binary
function convertToBinary(number) {
    
    return number.toString(2);
}

console.log(convertToBinary(10)); // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(0)); // Output: "0"
 