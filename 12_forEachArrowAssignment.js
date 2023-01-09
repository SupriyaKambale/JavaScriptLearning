console.log(`----ES6 FEATURES: ARROW IN FOR EACH ASSIGNMENT------------`);
const array_numbers=[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`\n Q1.Log the array element with index by using the forEach() and arrow function`);
array_numbers.forEach((currentValue, index)=>{console.log(`index: ${index}  Value: ${currentValue}` )})
console.log(`-------------------------------------------`);

console.log(`\n Q2.Log the positive numbers on the console using arrow function.`);
//console.log(`Total elements in the array is: ${array_numbers.length}`);
console.log('Positive elements');
var counter=0;
const positiveNumbersArray=[];
array_numbers.forEach((val) => {
    if(val>=0)
    {
        positiveNumbersArray.push(val);
        counter++;
    }
});
console.log(`Total positive elments in the array is:${counter}`);
console.log(positiveNumbersArray);


console.log(`--------------------------------------------`);
console.log(`\n Q3. Find negative numbers and add into new array and display it.`);
console.log(`Total elements in the array is: ${array_numbers.length}`);
console.log('Negative elements');
var counter=0;
const negativeNumbersArray=[];
array_numbers.forEach((val) => {
    if(val< 0)
    {
       
        negativeNumbersArray.push(val);
        console.log(`${val} added successfully in negative Numbers Array.`);
        counter++;
    }
});
console.log(`Total negative elments in the array is:${counter}`);
console.log(`New negative numbers array:`);
console.log(negativeNumbersArray);


console.log(`--------------------------------------------`);
console.log(`\n Q4. Find even numbers`);
const evenNumbersArray=[];
console.log(`Total elements in the array is: ${array_numbers.length}`);

var counter=0;
array_numbers.forEach((val) => {
    if(val%2==0)
    {
        //console.log(val);
        evenNumbersArray.push(val);
        counter++;
    }
});
//console.log(`Total even number elments in the array is:${counter}`);
console.log(`Even numbers array:`);
console.log(evenNumbersArray);




console.log(`--------------------------------------------`);

console.log(`\n Q5. Find the sum of all elements in the array.`);
var sum=0;
array_numbers.forEach((val) => {
 
       // console.log(val);
        sum=sum+val;
    
});
console.log(`Total sum of the elments in the array is:${sum}`);

console.log(`--------------------------------------------`);

console.log(`\n Q6 Print only even positioned array`);

//console.log(`Total elements in the array is: ${array_numbers.length}`);
console.log('Even Positioned Elements:');
var counter=0;
array_numbers.forEach((val,i) => {
    if(i%2==0)
    {
        console.log(`Index: ${i}  ${val}`);
        counter++;
    }
});
console.log(`Total even positions  in the array is:${counter}`);


console.log(`--------------------------------------------`);