console.log(`\n Q1. Find the greatest number.`);
var greatest=function(num1, num2)
{
    console.log(`\n Given values are: ${num1}  ${num2}`);

var result=(num1>num2?console.log(`${num1} is greater.`): console.log(`${num2} is greater.`));
}
greatest(10, -10);
greatest(800, 899);



console.log(`\n Q2. Check even odd numbers`);
var evenOddStr=function(str)
{
  

var result=(str.length%2==0?console.log(`Length of ${str} is ${str.length}:EVEN.`):console.log(`Length of ${str} is ${str.length}:ODD.`) );
}
evenOddStr("JavaScript");
evenOddStr("Developer");
evenOddStr("Google");

console.log(`\n Q3. Check words length even or odd`);

