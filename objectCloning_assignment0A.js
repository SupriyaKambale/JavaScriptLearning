console.log("-----Assignment 0A: Object, Array Freeze and merge......... ");

console.log(`\n ---------Q1. Create an object using literals namely→ personalDetails with your actual detail.`);

const personalDetails={
    name:"supriya",
    age:28,
    city:"Pune"
}
console.log(personalDetails);

console.log(`\n---------Q2. Create an object using literals → collegeDetails with your college details-----------`);
const collegeDetails={
cName:"DYPatil",
degree:"MCA",
passingYear:2014

}
console.log(collegeDetails);



console.log(`\n---------Q3. Merge these two objects and log details on console with meaning message.------------`);
const mergedObj=Object.assign({}, personalDetails, collegeDetails);
console.log(mergedObj);


console.log(`\n---------Q4. Create an array of your friend names and freeze it.------------`);
let friendsArray=["priya", "reshma", "komal", "sushma"];
console.log(friendsArray);
Object.freeze(friendsArray);
//friendsArray.push("Vedanti");
//friendsArray.pop("Seema");
//friendsArray.shift();


console.log(`\n---------Q5. Iterate step 4 array using for of loop and log friend names on console------------`);
console.log(friendsArray);

for (const element of friendsArray) {
  console.log(element);
}


console.log(`\n---------Q6. Given a string company = “Codemind Technology”;------------`);
console.log(`\n---------a. Write a code to reverse only → Technology word------------`);
const str="Codemind Technology";

const strArr=str.split(" ");

for (const element of strArr) {
    //console.log(element);
  }
let str3=(strArr[1]);
//console.log(str3);

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  var revStr=reverseString(str3);
  console.log(revStr);

  

console.log(`\n---------b. Expected output → “Codemind ygolonhceT”------------`);

var replacement= revStr;
strArr[strArr.length-1]=replacement;
//console.log(strArr);

console.log(strArr.join(' '));


//   //////
//   var array = ['a', 'b', 'c'];

// var replacement = 'x';

// array[array.length - 1] = replacement;

// console.log(array);  // ['a', 'b', 'x']
