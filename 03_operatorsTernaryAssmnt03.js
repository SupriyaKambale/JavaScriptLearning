console.log(`\n ----------------------------------------`);
console.log(`Q1. Check male marriage Eligibility`);
var maleMarriageEligibility=function(gender,age, boyName)
{
console.log(`\n Name:${boyName}  Gender:${gender}  Age:${age}`);
    var result=(gender=="Male" && age>=21?console.log(`Hey ${boyName} you are eligible for marriage.`):console.log(`Sorry ${boyName}. You are not eligible for marriage yet.`) );

}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");


console.log(`\n ----------------------------------------`);
console.log(`Q1. Check female marriage Eligibility`);
var femaleMarriageEligibility=function(gender,age, girlName)
{
console.log(`\n Name:${girlName}  Gender:${gender}  Age:${age}`);
    var result=(gender=="Female" && age>=21?console.log(`Hey ${girlName} you are eligible for marriage.`):console.log(`Sorry ${girlName}. You are not eligible for marriage yet.`) );

}
femaleMarriageEligibility("Female",16,"Jeniffer");
femaleMarriageEligibility("Female",27,"Malinda Gates");