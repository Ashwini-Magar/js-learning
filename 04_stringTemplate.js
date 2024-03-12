console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Gajanan";

//console.log("My name is: ", firstName, " and city is: ", city);

console.log(` My name is: ${firstName} and city is: ${city} `);
console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);
console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);
console.log(`========== toLowerCase() ==================`);
var greet = "GOOD MORNING";
var greetInLowerCase = greet.toLowerCase();
console.log(`${greet} in lower case is : ${greetInLowerCase}`);
var greet="   good morning  "
console.log(`trimmed string is: ${greet.trim()}`);
var Name="Ashwini Magar";
console.log(`string includes:${Name.includes("Ashwini")}`);
var num=15;
console.log(`number in string is:${num.toString()}`);
var college="Developers World!"
console.log(`using slice method  ${college.slice(0,9)}`);
var greet='  Good Morning  ';
console.log(`${greet} length is:${greet.length}`);
var len=greet.length;
var tr=greet.trim();
console.log(`trimmed string length is:${tr.length}`);
