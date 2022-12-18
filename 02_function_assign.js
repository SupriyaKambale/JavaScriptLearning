console.log("-----------Function assignment ---------");
console.log("\n-------Q1--------");

function fName()
{
    console.log("My first name is Supriya.");
}


function lName()
{
    console.log("My Last name is Kambale.");
}
fName();
lName();

console.log("\n-------Q2--------");
function personalDetails(firstName, lastName, collegeName)
{
console.log("My  name is:", firstName, lastName, "and college name is:", collegeName);
}
personalDetails("supriya", "kambale", "DYPIM");


console.log("\n-------Q3--------");
function swap_values(val1, val2)
{
console.log("\n------Before swapping------");
console.log("value 1=",val1, "value 2=", val2);
console.log("------After swapping------");
var  temp=val1;
val1=val2;
val2=temp;
console.log("value 1=",val1, "value 2=", val2);
}
swap_values(100,200);
swap_values("Virat","Anushka");


console.log("\n-------Q4--------");
function addThreeValues(val1, val2, val3)
{
    console.log(" Values passed are: val1=", val1, "val2=", val2, "val3=", val3);
sum=val1+val2+val3;
return sum;
}
addThreeValues(1,2,3);
console.log("sum of three values:",sum);
