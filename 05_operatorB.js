console.log(`=====================step1=================`);
function greaterNumber(value1,value2) {
    var result= value1>value2? "yes" : "no" ;
    console.log(`${value1} is greater than ${value2}: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log(`=====================step2=================`);
function isOddOrEvenNum(number){
    var result= number%2==0? "even" : "odd" ;
    console.log(`given number  is ${number} is ${result}`);
}
isOddOrEvenNum(29);
isOddOrEvenNum(44);
isOddOrEvenNum(0);
isOddOrEvenNum(101);
console.log(`=====================step3=================`);
function wordLength(value) {
    var val=value.length;
    var result=val%2==0?"EVEN":"ODD";
console.log(`GIVEN WORD ${value} length is ${val} and its ${result}`);
}
wordLength("JavaScript");
wordLength("developer");
wordLength("Google");
