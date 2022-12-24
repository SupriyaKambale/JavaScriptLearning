console.log("---------------String Assignment 01---------");
console.log("\n---------------Q1---------");
 //backtick 
var firstName = "TCS";

console.log(` My dream company is "${firstName}" `);//variable substitution

console.log("\n---------------Q2---------");
 //backtick 
var hobby1="playing chess";
var hobby2="listening music";
var hobby3="surfing internet";

console.log(` My hobbies are: Hobby1 is "${hobby1}" My hobby2 is "${hobby2}" My hobby2 is "${hobby3}"`);//variable substitution

console.log("\n---------------Q2 ---------");
 //backtick 
var hobby1="playing chess";
var hobby2="listening music";
var hobby3="surfing internet";

console.log(` My hobbies are: "${hobby1}" , "${hobby2}" ," ${hobby3}"`);//variable substitution


console.log("\n---------------Q2 Using function---------");

var resultHobbies=function(hobby1,hobby2,hobby3){
    console.log(` My hobbies are: "${hobby1}" , "${hobby2}" , "${hobby3}"`);
}
resultHobbies("playing chess","listening music","surfing internet");

