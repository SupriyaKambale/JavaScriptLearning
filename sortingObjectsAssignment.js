console.log(`-------------Sorting Objects in ascending and descending order---------------\n`);

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
}//end class


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
const emp_mahi=new Employee(99,"Mahi","HR",85000,"Infy");
arrayOfEmployee.push(emp_mahi);


 console.log(`Origional  employee array`);
 arrayOfEmployee.forEach((element) => {
    
   

    console.log(`Employee id:${element.emp_id} Name: ${element.emp_name} Department: ${element.emp_dept} Salary:${element.emp_salary}  Comapany: ${element.emp_company}`);
   
    
});
 
 console.log(`\n 1. Sorting Objects in ascending  order by department name`);
 //log  id, dept,company
 const sortByEmployeeDepartmentName = arrayOfEmployee.sort((a, b) =>
 a.emp_dept.localeCompare(b.emp_dept));

 sortByEmployeeDepartmentName.forEach(element => {
    console.log(`Department: ${element.emp_dept},ID:${element.emp_id}, Company: ${element.emp_company}`)
});


     


 console.log(`\n 2. Sorting Objects in descending  order by salary `);


 const sortByEmployeeSalary = arrayOfEmployee;
sortByEmployeeSalary.sort(function sort(a,b){if(a.emp_salary>=b.emp_salary){return b.emp_salary-a.emp_salary  }});

    arrayOfEmployee.forEach(element => {
        console.log(`Salary: ${element.emp_salary},Name:${element.emp_name}, Company: ${element.emp_company}`);})
   

