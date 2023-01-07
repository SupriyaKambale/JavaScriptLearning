var squareOfWordLength=function(str)
{
var len=str.length;
var square=len*len;
console.log(`\n Length of the string: ${len} Square:${square}`);

}//end squareOfWordLength()

squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

var divisionOfWordLength=function(str)
{
    console.log(`===================================`);
    console.log(`\n ${str}`);
    var totWords=str.split(" ");
    var totWordsLength=totWords.length;
    console.log(`\n Length of the string is: ${str.length}      Total words: ${totWordsLength}`);
var len=str.length;

var division=len/totWordsLength;
console.log(`  Q.2.1   Division:${division}`);

var mult=len*totWordsLength;
console.log(`Q.2.2  Multiplication:${mult}`);

}//end squareOfWordLength()

divisionOfWordLength("I am angular developer");


