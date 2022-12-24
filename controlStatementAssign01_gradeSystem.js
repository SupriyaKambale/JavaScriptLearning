

console.log("\n--------Q2. gradeSystem-------------")
var gradeSystem=function(score){
    if(score>=90&& score<=100)
    {
        console.log(`${score}:Your grade is A+!`);
    }
    if(score>=75 && score<90)
    {
        console.log(`Excellent score ${score}, your grade is A!`);
    }
    if(score>=50 && score<75)
    {
        console.log(`Good score${score}, your grade is B!`);
    }
    if(score>=35 && score<50)
    {
        console.log(`Score is ${score}, your grade is C, Need improvement.`);
    }
    if(score>=0 && score<35)
    {
        console.log(`Score is ${score},Failed!`);
    }
    else{
        console.log(`Invalid input`);
    }
}

gradeSystem(66);
gradeSystem("Fifty Five");
gradeSystem(undefined);
gradeSystem(13);
gradeSystem(35);
gradeSystem(20);
gradeSystem(" ");
gradeSystem(75);
gradeSystem(55);
gradeSystem(98);
gradeSystem(null);
gradeSystem(82);


