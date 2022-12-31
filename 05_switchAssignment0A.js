var monthOfYear=function(monthOfYear){
    switch(monthOfYear)
    {
case 1:console.log( ` ${monthOfYear}--------: January` );
       break;
case 2:console.log( ` ${monthOfYear}--------: February` );
       break;
case 3:console.log( ` ${monthOfYear}--------: March` );
               break;
case 4:console.log( ` ${monthOfYear}--------: April` );
        break;
case 5:console.log( ` ${monthOfYear}--------: May` );
        break;
case 6:console.log( ` ${monthOfYear}--------: June` );
        break;
case 7:console.log( ` ${monthOfYear}--------: July` );
        break;
case 8:console.log( ` ${monthOfYear}--------: August` );
        break;
 case 9:console.log( ` ${monthOfYear}--------: September` );
        break;
case 10: console.log ( ` ${monthOfYear}--------: October `);  
        break;
 case 11:console.log( ` ${monthOfYear}--------: November` );
        break;
case 12:console.log( ` ${monthOfYear}--------: December` );
        break;

default : console.log(`Invalid input. Please enter values between 0-12.`);    }
}
monthOfYear();
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);