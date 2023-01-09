console.log(`\n ------------------Ternary Operators assignment 03B----------------------`);
console.log(`\n Check TCS interview eligibility.`);
var eligibilityTCS=function(gradScore,hscScore, sscScore, candidateName)
{
console.log(`\n Graduation Score:${gradScore}  HSC Score:${hscScore}  SSC Score:${sscScore}`);
    var result=(gradScore>=70 && hscScore>=80 && sscScore>=90?console.log(`Congrats ${candidateName }! you are eligible for TCS interview.`):console.log(`  ${candidateName}, unfortunately you are not eligible for the interview.`) );

}
eligibilityTCS(80,86,90,"Supriya");
eligibilityTCS(70,65,55,"Sameer");
eligibilityTCS(60,79,88,"Vihaan");
