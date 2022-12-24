console.log("\n---------------Session 04 assignment on function-------------");
console.log("\n---------------Q2-------------");
var square=function(num){ console.log("Square of",num,"=",num*num);
                    }
                    square(5);
                    square(6);
                    square(25);
                    square(100);

                    console.log("\n---------------Q2-------------");
var areaOfRectangle=function(length, width){
    console.log("Length=", length, "Width=", width, "Area of rechangle is=",length * width);

                                            }
                                            areaOfRectangle(10,20);
                                            console.log("Type of areaOfRectangle is:",typeof areaOfRectangle);
     console.log("\n---------------Q3-------------");
     var areaOfTriangle=function(base, width){
        console.log("Base=", base, "Width=", width, "Area of rechangle is=",1/2*base * width);
    
                                                }
                                                areaOfTriangle(499,917);
                                                console.log("Type of areaOfTriangle is:",typeof areaOfTriangle);



                                                
console.log("\n---------------Q4-------------");
console.log("\n swap values with function expression");
var swap_values=function (val1, val2)
{
console.log("\n------Before swapping------");
console.log("value 1=",val1, "value 2=", val2);
console.log("------After swapping------");
var  temp=val1;
val1=val2;
val2=temp;
console.log("value 1=",val1, "value 2=", val2);
}
swap_values(100,200);
swap_values("Virat","Anushka");


console.log("\n---------------Q5-------------");
var str=function(sentence){
    console.log(" Input string:", sentence);
    console.log("A: Length :",sentence.length);
    console.log("B: Index of 'S':",sentence.indexOf("S"));
    console.log("C: Index of 'lang':",sentence.indexOf("lang"));
    console.log("D: Last character of the string:",sentence.charAt(sentence.length-1));
    console.log("E: Third last character of the string:",sentence.charAt(sentence.length-3));
}
str("JavaScript the most popular language");



