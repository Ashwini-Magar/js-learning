const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`type of array is:${typeof(fruits_seasonal)}`);
console.log("==================================step1================================");
console.log(`first element of Array ${fruits_seasonal} is============>${fruits_seasonal[0]}`);
console.log(`last element of Array ${fruits_seasonal} is============>${fruits_seasonal[fruits_seasonal.length-1]}`);
console.log("==================================step2================================");
console.log(`before adding papaya at 0th index array is :${fruits_seasonal}`);
fruits_seasonal.unshift("Papaya");
console.log(`after adding papaya at 0th index array is==============>${fruits_seasonal}`);
console.log("==================================step3================================");
console.log(`before removing  mango , array is :${fruits_seasonal}`);
fruits_seasonal.splice(4,1);
console.log(`after removing  mango , array is :${fruits_seasonal}`);
console.log("==================================step4================================");
console.log(`before adding pineapple at last index array is :${fruits_seasonal}`);
fruits_seasonal.push("Pineapple");
console.log(` after adding pineapple last element of Array is  ${fruits_seasonal} `);
console.log("==================================step5================================");
console.log(`before adding Dragon Fruit before watermelon  array is :${fruits_seasonal}`);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`after adding Dragon Fruit before watermelon  array is :${fruits_seasonal}`);
console.log("==================================step6================================");
console.log(`before replacing orange with kiwi  array is :${fruits_seasonal}`);
fruits_seasonal.splice(2,1,"kiwi");
console.log(`after replacing orange with kiwi  array is :${fruits_seasonal}`);
console.log("==================================step7================================");
var slice=fruits_seasonal.slice(1,5);
console.log(`elements from 1to 4 index are: ${slice}`);
console.log("==================================step8================================");
console.log(`original array is :${fruits_seasonal}`);
 var sl=fruits_seasonal.slice(fruits_seasonal.length-3)
console.log(`last 3 elements of array are i.e slice : ${sl}`);

