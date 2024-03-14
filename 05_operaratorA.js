function squareOfWordLength(sentence) {
    var ln=sentence.length;
    var res=ln**2;
console.log(` given string length is:${ln} and its square is ${res}`);
}
 squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log("====================step2================");
function sentence() {
    var value="I am Angular Developer";
var ln=value.length;
totalWords=value.split(" ");
 var totalWords1= totalWords.length;
var divide=ln/totalWords1;
console.log(`string length is before split is  ${ln} and totalWords in string are ${totalWords1} so division= ${divide}` );
var multi=ln*totalWords1;
console.log(`string length is before split is  ${ln} and totalWords in string are ${totalWords1} so multiplication= ${multi}` );


}
sentence();
