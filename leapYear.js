//Find the Leap year.

var check_leap_year=function(leap_year){
    if(leap_year%4==0)
    {
        console.log(`${leap_year} is the leap year!`);
    }
    else
    {
        console.log(`${leap_year} : Invalid input.`);
    }
}
    

check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1045);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(NaN);
check_leap_year(1750);
