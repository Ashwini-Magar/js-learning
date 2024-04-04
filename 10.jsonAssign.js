
const employeeJSON=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["DEV","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32, Laham St",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred by":"E0012"
}`
console.log(`======== Convert JSON to Object ===========`);
console.log(`before parse type of is : ${typeof employeeJSON}`);
const employeeObject = JSON.parse(employeeJSON);

console.log(`after parse type of is : ${typeof employeeObject}`);
console.log("===================step1====================");
console.log(employeeObject);
console.log("===================step2=================");
console.log(`role is ${employeeObject.role[0]}`);
console.log("===================step3=================");
const nameArray=employeeObject.name.split(" ");
console.log(`last name in ${employeeObject.name} is ${nameArray[1]}`);
console.log("===================step4=================");
const dojArray=employeeObject.doj.split("-");
console.log(`year in ${employeeObject.doj} is ${dojArray[2]}`);