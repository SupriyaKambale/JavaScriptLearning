var myFullName="Mohit";
console.log(myFullName);


//function expression
// Means we can store the function as a value
var showResult=function(){
    console.log("Show");
                                }
//console.log(showResult);
showResult(); //function expression call


//we can store the function as an expression in JS
//inside function
var substraction=function (num1, num2){var result=num1-num2; 
                                        console.log("Substraction",result);
                                    }
                                    substraction(50,40);

//Function expression with value return

var substraction=function (num1, num2){var result=num1-num2; 
                                     console.log("Substraction",result);
                                    }
                                    substraction(50,40);
