var num=3;
var num2="2";
var result= num+num2;
console.log("======================string numeric with + operator==========================");
console.log(`${num} datatype is ${typeof num} and ${num2} datatype is ${typeof num2} and implicit conversion  ${result} its datatype is ${typeof result}`);
console.log("================================boolean number with + operator==========================");
var value1=4;
console.log(`${value1} datatype ${typeof value1}`);
var value2=true;
console.log(`${value2}  datatype ${typeof value2}`);
var res=value1+value2;
console.log(` datatype after + ${res} ${typeof res} `);
console.log("================================ numeric string with -,/,* ==========================");
var value1='4';
var value2='2';
var result='4'*'2';
console.log(`${value1} datatype is ${typeof value1} and ${value2} datatype is ${typeof value2} and implicit conversion multiplication  ${result} datatype is ${typeof result}`);
var result='4'-'2';
console.log(`${value1} datatype is ${typeof value1} and ${value2} datatype is ${typeof value2} and implicit conversion subtraction  ${result} datatype is ${typeof result}`);
var result='4'/'2';
console.log(`${value1} datatype is ${typeof value1} and ${value2} datatype is ${typeof value2} and implicit conversion division  ${result} datatype is ${typeof result}`);
console.log("================================ undefined with number ,boolean,null ==========================");
var num1=4+undefined;
console.log(`undefined with number 4 gives ${num1}`);
var num1=true+undefined;
console.log(`undefined with boolean gives ${num1}`);
var num1=null+undefined;
console.log(`undefined with null gives ${num1}`);

console.log("==================explicit conversion====================");
console.log(`string to number with + operator`);
var str="100";
console.log(`given number ${str} type of ${typeof str}`);
var num=+str;
console.log(`given number ${num} type of after conversion is ${typeof num}`);


