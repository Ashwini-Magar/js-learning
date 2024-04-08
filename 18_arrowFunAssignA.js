console.log("========================step1=======================");
const fun=()=>{
console.log(`"Good Morning,Today is Monday"`);
}
fun();

const fun2=(n1,n2,n3=1)=>{
console.log(`multiplication of ${n1},${n2},${n3} is: ${n1*n2*n3}`);
}
console.log(`=======================step 2.a======================`);
fun2(5,5,2);
console.log(`=======================step 2.b======================`);
fun2(10,4);
console.log(`=======================step 3======================`);
const fun3=(num1,num2,num3,num4,num5)=>{
let addition=num1+num2+num3+num4+num5;
return addition;
}
let result=fun3(100,100,200,349,756);
console.log(`addition of 100,100,200,349,756 is : ${result}`);
let str=fun3("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`concatenation of words will be: ${str}`);