class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"WIPRO");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"WIPRO");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`=======================sorting array in descending order of Employee ID and log employee ID ,name ,dept=============`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_id>=p2.emp_id ? -1 : 1;
});
arrayEmployees.forEach(element => {
    console.log(element.emp_id, element.emp_name, element.emp_dept);
});
console.log(`=======================sorting array in ascending order of Employee dept and log employee ID ,company ,dept===========`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_dept>=p2.emp_dept ? 1 : -1;
});
arrayEmployees.forEach(element => {
    console.log(element.emp_dept, element.emp_company, element.emp_id);

});
console.log(`================sorting array in descending order of Employee salary and log employee salary ,name ,company===========`);
arrayEmployees.sort((p1, p2)=>{
    return p1.emp_salary>=p2.emp_salary ? -1 : 1;
});
arrayEmployees.forEach(element => {
    console.log(element.emp_id, element.emp_salary, element.emp_company);
});