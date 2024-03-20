console.log("===================step1=========================");
var cnt=0;
var sentence="I am very good IT developer";
for(let i=0;i<sentence.length;i++){
if(sentence.charAt(i)=='a' || sentence.charAt(i)=='i' || sentence.charAt(i)=='o' ||sentence.charAt(i)=='u' ||sentence.charAt(i)=='e' ||sentence.charAt(i)=='A' ||sentence.charAt(i)=='E' || sentence.charAt(i)=='O' ||sentence.charAt(i)=='U' ||sentence.charAt(i)=='I' )
{
    cnt++;
   
}
}
console.log(`count of vowels is:${cnt}`);


console.log("===================step2=========================");
var temp=0;
function sum() {
    for(let i=1;i<=5;i++){
       
      temp=i*i*i+temp;

    }
console.log(`sum of cube of numbers:${temp}`);
}
sum();
console.log("===================step3=======================================");
function oddPositionedChars(word) {
    console.log("odd position characters are:");
  for(let i=0;i<=word.length;i++)
    {
        if(i%2!=0 && word.charAt(i)!=" "){
            console.log(word.charAt(i));
            
        }
    }

} 
    

oddPositionedChars("Hard work always pays back");
oddPositionedChars("Soon I will be UI IT Champ");