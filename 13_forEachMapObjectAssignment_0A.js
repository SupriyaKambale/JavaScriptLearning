console.log(`-------------Use only forEach()  Assignment 0A---------------`);

class Employee
{
constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company)
{
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;
}//end constructor
}//end claass

const arrayOfEmployee=[];
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
arrayOfEmployee.push(emp_anil);
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
arrayOfEmployee.push(emp_radha);
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
arrayOfEmployee.push(emp_rishi);
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
arrayOfEmployee.push(emp_sonali);
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
arrayOfEmployee.push(emp_monika);
const emp_vinny=new Employee(88,"Vinny","IT",75000,"TCS");
arrayOfEmployee.push(emp_vinny);
const emp_mahi=new Employee(99,"Mahi","HR",45000,"Infy");
arrayOfEmployee.push(emp_mahi);

// for (const iterator of arrayOfEmployee) {
//     console.log(iterator);
// }
console.log(`Q1. Employee details working in TCS:`);
 arrayOfEmployee.forEach((element) => {
    
    if(element.emp_company=="TCS"){

    console.log(`Employee id:${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary:${element.emp_salary}  Comapany: ${element.emp_company}`);
    }
    
});

console.log(`\n Q2. Employee details whose salary is greater than or equals to 50000:`);
 arrayOfEmployee.forEach((element) => {
    
    if(element.emp_salary>=50000){

    console.log(`Employee id:${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary:${element.emp_salary}  Comapany: ${element.emp_company}`);
    }
    
});


console.log(`\n Q3. Find the sum of all employees salary`);
let sum=0;
let counter=0;
 arrayOfEmployee.forEach((element) => {
    
  sum=sum+element.emp_salary;

   // console.log(`Employee id:${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary:${element.emp_salary}  Comapany: ${element.emp_company}`);
    console.log(element.emp_id, element.emp_salary);
    counter++;
    
});
console.log(`Sum of all employees salary:${sum}`);


console.log(`\n Q4. Find the average salary`);
let averageSalary=sum/counter;
console.log(`Average salary of all employees:${averageSalary}`);


console.log(`\n Q5. Find the HR and IT department employees whose salary is greater than 75000:`);
 arrayOfEmployee.forEach((element) => {
    
    if((element.emp_dept=="HR" || element.emp_dept=="IT")&&(element.emp_salary>=75000)){

    console.log(`Employee id:${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary:${element.emp_salary}  Comapany: ${element.emp_company}`);
    }
    
});

