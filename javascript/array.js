// const arr = [1,2,3,4,"hello"]
// arr.pop()
// console.log(arr.length);

// class student{
//     student(name,age){
//         this.name = name;
//         this.age = age;
//     }
    
// }
// student s1 = new student("k",54)

const arr = [1,2,3,4,5]
arr.splice(2)
console.log(arr);
const arr2 = arr.toSpliced(2)
console.log(arr);

//objects 

const marks = [12,65,48,74,25,12,75,88,556,4];
marks.map((num)=>{
    console.log(num+2);
    
}) //automaticallly creates an array and stores value in it 


//forEach
marks.forEach((num)=>{
    console.log(num);
    
}) //does not create an array and stores value