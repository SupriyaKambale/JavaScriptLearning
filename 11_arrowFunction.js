// ARROW FUNCTION

let show1 = ()=>{console.log("Hello");}
show1();// => function Syntax// let fun = ()=>{// };

// Arrow function with no argument and no return value
let show2 = ()=>{console.log("Hello");}
show2();// => function Syntax// let fun = ()=>{// };

//Arrow Function with argument
let sum = (n1, n2)=>{console.log(n1+n2);}
sum(10, 10);

// Arrow Function with argument and return value
let multiply = (n1, n2)=> {let mul = n1*n2;return mul;}
let mulResult = multiply(5, 5);
console.log(mulResult);