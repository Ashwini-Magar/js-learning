
class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
this.emp_id=emp_id;
this.emp_name=emp_name;
this.emp_dept=emp_dept;
this.emp_salary=emp_salary;
this.emp_company=emp_company;


}
detail(){
    console.log(`Employee Details => id: ${this.emp_id},name : ${this.emp_name}, dept: ${this.emp_dept},salary: ${this.emp_salary},company:${this.emp_company}`);
}
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"WIPRO");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"WIPRO");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");
const arrayEmps=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log("=============================1.find all employee from wipro company=========================");
arrayEmps.filter((element)=>{
if (element.emp_company=="WIPRO") {
    element.detail();
}
})
console.log("======================2.find the employee from IT or HR dept=============================");
arrayEmps.filter((element)=>{
    if (element.emp_dept=="IT" || element.emp_dept=="HR") {
        element.detail();
    }
    })
    console.log("======================3.find the employees whose empId are > 50=============================");
arrayEmps.filter((element)=>{
    if (element.emp_id>50) {
        element.detail();
    }
    })
    console.log("======================4.find the employees whose names start with letter A or v or M============================");
    arrayEmps.filter((element)=>{
        if (element.emp_name.startsWith("A")||element.emp_name.startsWith("V")||element.emp_name.startsWith("M")) {
            element.detail();
        }
        })
        console.log("======================5.find the avg salary of employee from all the dept============================");
        const sumSalary = arrayEmps.reduce( (runningTotal, currentValue)=>{
            return runningTotal+currentValue.emp_salary;
        }, 0 );
        
        console.log(`Average salary from all department is: ${sumSalary/arrayEmps.length}`);
        console.log(`================= 6.find the average salary of employee's from IT department========================= `);
        const newArray = arrayEmps.filter((emp)=>{
    return emp.emp_dept=="IT";
});

const sumSalaryIT = newArray.reduce( (runningTotal, currentValue)=>{
    return runningTotal+currentValue.emp_salary;
}, 0 );

console.log(`Average salary from IT department is: ${sumSalaryIT/newArray.length}`);