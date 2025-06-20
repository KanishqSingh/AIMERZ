
// "use strict"

// {let a = 10;
// const b = 15;}

// console.log(a,b) //reference error : a not defined

// let a = 9 ;
// a=122;
// const b = 10;
// console.log(a,b);

// function show(){
//     var name = "peter parker"
// }

let a = 9;
console.log(a++);
console.log(++a);

let boolb = true;
let num = + boolb;
console.log(num);
console.log(+ true);


let val = '11'
let res = 22 + val;
console.log(res);

if (temp < 0) {
    console.log('freezing');
    
    
} else if(temp >= 0 && temp < 10) {
    console.log('cold');
    
}
else if(temp >11 && temp < 25) {
    console.log('cold');
    
}

let aaaaa = prompt('enter a number');


const display = () =>{
    console.log("hello");
    return 0;
    
}
console.log(display());

//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
        
        
    }
    
    
}
outer();
//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
        
        
    }

    return inner
    
    
}
outer()();
//
function outer() {
    console.log("outer");
    function inner() {
        console.log("inner");
        
        
    }

    return inner
    
    
}

const aa = outer();
aa();
//
console.log(a1);

const a1 = 9;

show();
function show() {
    console.log("hell0");
    
    
}

//closure


//lexical environment



//

//10-jun
//array

// const arr = [1,2,3,4,5,6];
// console.log(arr);

const r = [1,2,3] + 4;
console.log(r);

console.log([...'🫎🫢']);




