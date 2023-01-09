console.log( `\n --------------ARROW FUNCTION ASSIGNMENT---------------`);
console.log(`\n Q1. Use arrow function with no arguments and no return value`);
let greet=()=>{ console.log(`\n Good morning. Today is monday.`)}
greet();
console.log(`\n--------------------------------------------------------`);


console.log(`\n Q2. Multiplication of 3 arguments and no return value. Set one default value`);
let mult=(num1,num2,num3=1) =>{
    let result=num1*num2*num3;
    console.log(`Multiplication of ${num1},${num2},${num3}=  ${result}`);
}
mult(5,5,2);
mult(10,4);
console.log(`\n--------------------------------------------------------`);


console.log(`\n Q3. Pass 5 arguments and return addition`);
let addition=(n1,n2,n3,n4,n5)=>{
console.log(`\n Function get input values as: ${n1},  ${n2},  ${n3},  ${n4},  ${n5}`);
let sum=n1+n2+n3+n4+n5;
return sum;
                }
let sum1=addition(100,100,200,349, 756);
console.log(`Got addition in return as:${sum1}`);
// let sum2=addition();
// console.log(`Got addition in return as:${sum2}`);
let sum3=addition("I am", "learning", "ES6", "features","in depth.");
console.log(`Got addition in return as:${sum3}`);

console.log(`\n--------------------------------------------------------`);
