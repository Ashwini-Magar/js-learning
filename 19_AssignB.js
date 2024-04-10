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
console.log("===================================STEP1=========================================");
arrayEmployees.forEach((element) => {
    if (element.emp_company=="TCS") {
        console.log(`employee working in TCS : ${element.emp_name},${element.emp_company}`);
    }
});
console.log("================================step2==============================");
arrayEmployees.forEach((element) =>{
if (element.emp_dept=="Finance") {
    console.log(`department Name :${element.emp_dept} ,Employee name : ${element.emp_name}`);
}
});
console.log("================================step3==============================");
arrayEmployees.forEach((element) =>{
   if(element.emp_name.startsWith("R")){
    console.log(`id::${element.emp_id} name::${element.emp_name}  dept::${element.emp_dept}  company name::${element.emp_company}  salary::${element.emp_salary} `); 
   }
    });
console.log("================================step4==============================");
arrayEmployees.forEach((element) =>{
    if (element.emp_salary>75000) {
        console.log(`company Name ::${element.emp_company} ,Employee name :: ${element.emp_name} salary :: ${element.emp_salary}`);
    }
    });
    console.log("================================step5==============================");
for (let index = 0; index < arrayEmployees.length; index++) {
    const element = arrayEmployees[index];
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
       
        console.log(`id::${element.emp_id} name::${element.emp_name}  dept::${element.emp_dept}  company name::${element.emp_company}  salary:${element.emp_salary} `); 



    }
    
}
console.log("================================step6==============================");
arrayEmployees.forEach((element)=>{
if (element.emp_company=="Infy") {
   console.log(`id:${element.emp_id} name:${element.emp_name}  dept:${element.emp_dept}  company name:${element.emp_company}  salary:${element.emp_salary} `); 
}
});