console.log("---------Q1. Check even odd numbers------------");
//check passed argument number is even or odd and return the result as EVEN or ODD eg.45,70,67,98
var evenOddResult=function(num){
    if(num%2==0)
    {
        console.log(`${num} is EVEN value.`);
    }
    else{
    console.log(`${num} is ODD value.`);
    }
}
evenOddResult(45);
evenOddResult(70);
evenOddResult(67);
evenOddResult(98);


console.log("\n--------Q2. check eligible for vote  or not-------------")
//age 18,20,17,40
var checkAge=function(age){
    if(age>=18)
    {
        console.log(`Age:${age}. You are  eligible for voting!`);
    }
    else{
    console.log(`Age:${age}. I am sorry! You are  NOT eligible for voting!`);
    }
    
}
checkAge(18);
checkAge(20);
checkAge(17);
checkAge(40);

console.log("\n--------Q3.Check if string contains more than 10 characters-------------")
//JavaScript-ES6
var checkStrLength=function(str){
                                if(str.length>10)
                                    { 
                                        console.log(`${str}: Length:${str.length} YES`);
                                    }
                                 else{
                                     console.log(`${str}: Length:${str.length}  NO`);
                                    }
                                }
    checkStrLength("JavaScript-ES6");
    checkStrLength("Angular");
    checkStrLength("CSS");

console.log("\n--------Q4.Check if string starts with 'Java'-------------")
//JavaScript Language
var checkJavaStr=function(str){
    if(str.includes("Java")==true)
    {
        console.log(`${str}:true->Contains Java`);
    }
    else{
            console.log(`${str}:False`);
    }

}


checkJavaStr("JavaScript Language");
checkJavaStr("HTML Language");
checkJavaStr("CSS");
checkJavaStr("Java2.0");







