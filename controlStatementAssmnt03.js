console.log(`\n-----------------Assignment 3--------------------\n`);
var checkAge=function(gender,age){
    if(gender=="Male" && age>=21)
    {
        console.log(`Age: ${age} gender:${gender}:Hey man! You are eligible for  marriage.`);
    }
    else if(gender=="Female" && age>=18)
    {
        console.log(`Age: ${age} gender:${gender}:Hey lady! You are eligible for  marriage.`);
    }
   
    else {
        if(gender=="Other")
        {
            console.log(`Age: ${age} gender:${gender}: Invalid gender. Please provide the valid details.`);
        }
        else{
        console.log(`Age: ${age} gender:${gender}: sorry! You are underage so uneligible for  marriage.`);
        }
    }

   
       
    
    }


checkAge("Male",17);
checkAge("Male",25);
checkAge("Female",28);
checkAge("Female",16);
checkAge("Other",35);
checkAge("Other",41);
