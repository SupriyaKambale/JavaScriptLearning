console.log(`\n Q2. ---------------Find the greatest value in the given number----------------------`);
var greatestNumber=function(num1, num2, num3){
    if(num1>num2&&num1>num3)
    {
 console.log(`Given numbers: ${num1}, ${num2}, ${num3} ----------> ${num1} is the greatest numbers`);
    }
    if(num2>num1&&num2>num3)
    { 
        console.log(`Given numbers: ${num1}, ${num2}, ${num3} ---------->  ${num2} is the greatest number.`);
    }
    if(num3>num1&&num3>num2){
        console.log(`Given numbers: ${num1}, ${num2}, ${num3} ----------> ${num3} is the greatest number.`);

    }
    else{

     // console.log("Invalid Input:Negative value entered");
    
    }

}
greatestNumber(56,70,80);
greatestNumber(20,-90,0);
//greatestNumber(1,2,3);
