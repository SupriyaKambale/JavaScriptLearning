console.log(`\n ------Control Flow Statement Assignment 0B--------------`);
console.log('\n Q1.------------WAP to print the numbers from 5 to 15 by incrementing 1');
for( i=5; i<=15; i++)
{
 console.log(i);
}

console.log('\n Q2.------------WAP to print the numbers from 50 to 40 by decrementing 1');
for( i=50; i>=40; i--)
{
 console.log(i);
}

console.log('\n Q3.------------WAP to print the first 15 odd numbers-----');
var counter=0;
for( i=1; counter<=15; i++)
{
    if(i%2==1)
    {
       
        console.log(`${counter} ) ${i}`);
        counter++;
    
    }
 
}

console.log('\n Q4.------------WAP to print the first 10 even numbers-----');
var counter=0;
for( i=1; counter<=10; i++)
{
    if(i%2==0)
    {
       
        console.log(`${counter} ) ${i}`);
        counter++;
    
    }
 
}

console.log('\n Q5.------------WAP to print 5 to 50-----');

for( i=5; i<=50; i=i+5)
{
        console.log(` ${i}`);
}

console.log('\n Q6.------------Table of 10-----');

for( i=10; i<=100; i=i+10)
{
        console.log(` ${i}`);
}


console.log('\n Q7.------------Print Reverse Table of 10-----');

for( i=100; i>=10; i=i-10)
{
        console.log(` ${i}`);
}


