console.log("\n--------Q1. check eligible for vote  or not-------------")
//age 18,20,17,40
var checkAge=function(age){
    if(age>=18)
    {
        console.log(`Age:${age}.Valid!`);
    }
    else{
    console.log(`Age:${age}. Invalid data!`);
    }
    
}
checkAge(45);
checkAge(17);
checkAge(8);
checkAge(5);
checkAge(-10);
checkAge(200);
checkAge(0);

console.log("\n--------Q2. gradeCalculation-------------")
var gradeCalculation=function(marks){
    if(marks>=90)
    {
        console.log(`${marks}:Your grade is A+!`);
    }
    if(marks>=75 && marks<90)
    {
        console.log(`Excellent marks ${marks}, your grade is A!`);
    }
    if(marks>=50 && marks<75)
    {
        console.log(`Good marks${marks}, your grade is B!`);
    }
    if(marks>=35 && marks<50)
    {
        console.log(`Marks is ${marks}, your grade is C, Need improvement.`);
    }
    if(marks>=0 && marks<35)
    {
        console.log(`Marks is ${marks},Fail!`);
    }
    else{
        console.log(`Please provide the valid marks.`);
    }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
