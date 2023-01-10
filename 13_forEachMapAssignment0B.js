console.log(`-------------Use only forEach() with Map Assignment 0B---------------`);

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

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinny=new Employee(88,"Vinny","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahi","HR",45000,"Infy");

 const mapOfEmployees=new Map();
 mapOfEmployees.set(emp_anil.emp_id, emp_anil);
 mapOfEmployees.set(emp_radha.emp_id, emp_radha);
 mapOfEmployees.set(emp_rishi.emp_id, emp_rishi);
 mapOfEmployees.set(emp_sonali.emp_id, emp_sonali);
 mapOfEmployees.set(emp_monika.emp_id, emp_monika);
 mapOfEmployees.set(emp_vinny.emp_id, emp_vinny);
 mapOfEmployees.set(emp_mahi.emp_id, emp_mahi);

 console.log(mapOfEmployees);

 console.log(`Traverse the employee map`);
 mapOfEmployees.forEach((element) => {
    console.log(`\n ${element.emp_id}===>Name:${element.emp_name} Department:${element.emp_dept} Salary:${element.emp_salary}  Company:${element.emp_company} `);
    
 });