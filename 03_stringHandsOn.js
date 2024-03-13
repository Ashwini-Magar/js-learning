var sentence="   Hey you are doing good, keep it up   ";
function stringHandsOn(){
    console.log(`STEP 1: Given String is: ${sentence}`);
    console.log("===============================================");
var ln=sentence.length;
console.log(`step2: length of given string is: ${ln}`);
console.log("===============================================");

var sentenceTrim=sentence.trim();
var ln2=sentenceTrim.length;
console.log(`step 3: trimmed sentence ${sentenceTrim} and length of trimmed sentence is ${ln2}`);
console.log("===============================================");

var extraSpace= ln-ln2;
console.log(`step 4: extra spaces removed are: ${extraSpace}`);
console.log("===============================================");

var first=sentenceTrim.charAt(0);
var last=sentenceTrim.charAt(sentenceTrim.length-1);
console.log(`step 5:  after trim first char is:${first} and last char is ${last} `);
console.log("===============================================");

var count= sentenceTrim.split(" ");
var count1=count.length;
console.log(` step 6:total number of words after trim are: ${count1} `);
console.log("===============================================");

var series=sentence.indexOf("good");
console.log(` step 7:index of good in given string is: ${series}`);
console.log("===============================================");

var str=sentence.substring(22);
console.log(` step 8: substring by using substring method is : ${str}`);
console.log("===============================================");

var end=sentenceTrim.endsWith("up");
console.log(`step 9: given string ${sentenceTrim} is ends with up is  ${end}`);
console.log("===============================================");

var start=sentenceTrim.startsWith("Hey");
console.log(`step 10: given string ${sentenceTrim} is starts with Hey is  ${start}`);


}
stringHandsOn();