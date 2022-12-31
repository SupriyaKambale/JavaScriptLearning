var day=function(day){
    switch(day)
    {
case 1:console.log( `Day ${day} is Monday: Working day!` );
       break;
case 2:console.log(`Day ${day} is Tuesday: Working day!`);
       break;
case 3:console.log(`Day ${day} is Wednesday: Working day!`)
               break;
case 4:console.log(`Day ${day} is Thursday : Working day!`);
        break;
case 5:console.log(`Day ${day} is Friday: Working day!`);
        break;
case 6:console.log(`Day ${day} is Saturday: Non working day!`);
        break;
case 7:console.log(`Day ${day} is Sunday: Non working day!`);
        break;
default : console.log(`Invalid input.`);    }
}
day(1);
day(2);
day(3);
day(4);
day(5);
day(6);
day(7);
day(9);