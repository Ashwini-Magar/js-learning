const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log("================================step1=============================");
console.log(`length of given array is ${arrayNumbers} length of array :${arrayNumbers.length}`);
console.log("================================step2=============================");
console.log(`first element in array is: ${arrayNumbers[0]}`);
console.log(`last  element in array is: ${arrayNumbers[arrayNumbers.length-1]}`);
console.log("================================step3=============================");
console.log(`third last element in array is: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log("================================step4=============================");
for(let i=0;i<arrayNumbers.length;i++)
{
    if (arrayNumbers[i]%2==0) {
        console.log(`even numbers in array are:${arrayNumbers[i]}`);
    }
}
console.log("================================step5=============================");
for(let i=0;i<arrayNumbers.length;i++)
{
    if (arrayNumbers[i]%2!=0) {
        console.log(`odd numbers in array are:${arrayNumbers[i]}`);
    }
}

console.log("================================step6=============================");
var sum=0;
for(let i=0;i<arrayNumbers.length;i++)
{

    if (i%2==0) {
    sum=sum+arrayNumbers[i];
    }
}
console.log(`sum of even positioned elements in array are:${sum}`);
console.log("================================step7=============================");
var sum=0;
for(let i=0;i<arrayNumbers.length;i++)
{
    if (i%2!=0) {
        sum=sum+arrayNumbers[i];
    }
}
console.log(`sum of odd positioned elements in array are:${sum}`);
console.log("================================step8=============================");
var sum=0;
for(let i=0;i<arrayNumbers.length;i++)
{
    
        sum=sum+arrayNumbers[i];
    
}
console.log(`sum of all elements in array are:${sum}`);
console.log("================================step9=============================");
for(let i=0;i<arrayNumbers.length;i++)
{
    
        if(arrayNumbers[i]%5==0){
            console.log(` multiple of 5 in array are: ${arrayNumbers[i]} `);
        }
    
}
console.log("================================step10=============================");
    
       console.log(`given array contain element 115:${arrayNumbers.includes(115)}`);
       console.log("================================step11=============================");

    
       console.log(`given array contain element 23:${arrayNumbers.includes(23)}`);
       console.log("================================step12=============================");
      
       console.log(`array before adding 55 and 66 :${arrayNumbers}`);
       arrayNumbers.splice(3,0,55,66)
       console.log(`array after adding 55 and 66 :${arrayNumbers}`);
       console.log("================================step13=============================");
      
       console.log(`array before deleting elements from index 4 array is: :${arrayNumbers}`);
       arrayNumbers.splice(4,arrayNumbers.length-1)
       console.log(`array after deleting elements :${arrayNumbers}`);
       


   

