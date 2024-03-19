var word="JavaScript";
for(let i=0;i< word.length;i++){
    var element =word.charAt(i);
    console.log(element);
}
    
console.log(`==== WAP to count the char a ===`);
var word = "JavaScript";
var count = 0;
for (let index = 0; index<word.length; index++) {
    var char = word.charAt(index);
    if (char=='a') {
        count = count+1;
    }  
}
console.log(`Char a count is: ${count}`);