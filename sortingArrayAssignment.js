console.log(`-------------A. Sorting Array in ascending and descending order---------------\n`);


const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log();
console.log(`Input Array: ${array_roll_numbers}`);

console.log(`\n Q1.a. Sorting Array in ascending orer with only sort()`);
console.log(array_roll_numbers.sort());
console.log(`Only sort() is giving wrong output.`);

console.log(`\n Q1.b. Sorting Array in ascending order with logic.`);
//console.log(array_roll_numbers.sort(function(a, b){return a - b}));

function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort(array_roll_numbers));

console.log(`\n Q2. Sorting Array in descending orer with custom logic.`);
console.log(array_roll_numbers.sort(
    function(a, b)
    {
        return b - a
    }
    )
    );

console.log(`\n Q3. Find the greatest Number`);
console.log(`GreatestNumber in array: ${array_roll_numbers[0]}`);


console.log(`\n Q4 Find the least/smallest number`);
console.log(` Smallest number in array: ${array_roll_numbers[array_roll_numbers.length-1]}`);

console.log(`\n Q5. Remove duplicate numbers from array.`);
function removeDuplicates(arr) {
    var unique = [];
    var duplicate=[];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
        else{
            duplicate.push(element);
        }
    
    });
    console.log(`Duplicate values:`);
    console.log(duplicate);
    console.log(`Array after removing duplicates:`);
    return unique;

    }
    
  
    console.log(removeDuplicates(array_roll_numbers))
    //console.log(duplicate);



    
