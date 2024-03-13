console.log(`I am "Software" Developer`);

var city = "Pune";
var firstName = "Ghana";

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
console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);
console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);
console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

console.log("==============function=========");
function totalWord(result)
{
var total=result.split(" ");
console.log(`spit are-${total}`);
console.log(`total words are:${total.length}`);

}
totalWord("I am happy buddy");
totalWord("I am learning JS the language of internet");

// Write a function with name totalWord() with one arguments

//  "I am happy Buddy" 

//  "I am learning JS the language of internet"

// and this function should return the total numbers of words

 

function totalWord(sentence){

    var words = sentence.split(" ");

    var totalWords = words.length;

    return totalWords

}

var totalWords = totalWord("I am happy Buddy");

console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

 

var totalWords = totalWord("I am learning JS the language of internet");

console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);

