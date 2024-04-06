console.log("===================step1================================");
let cnt=0;
const arr = [3, 9, 7, 6, 19, 29, 53];
for (const i in arr) {
    for (let index = 2; index <arr[i]/2; index++) {
      if (arr[i]%index!=0) {
        cnt=cnt+1;
        break;
      }
        
    }

}
console.log(`total prime numbers in array ${arr} are===== >${cnt}`);


console.log("===================step2================================");

function spaceCount(str){
    let space=str.split(" ").length-1;
  
return space;

}
let result1=spaceCount("Revision is the mother of success");
console.log(`total number of spaces in Revision is mother of success  are ${result1}`);
let result2=spaceCount("Javascript is the language of internet world");
console.log(`total number of spaces in Javascript is the language of internet world are ${result2}`);