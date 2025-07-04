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

//

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
 
  