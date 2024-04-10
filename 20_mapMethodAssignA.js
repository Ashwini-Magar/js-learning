const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log("=====================step1========================");
const arrayTransform=arrayNumbers.map((Element)=>{
    return Element+10;
    
})
console.log(`new array by adding 10 into each element of ${arrayNumbers}====>${arrayTransform}`);
console.log("=====================step2========================");
const arrayCube=arrayNumbers.map((Element)=>{
    return Element*Element*Element;
})
console.log(`new array making cube of each element of ${arrayNumbers}====>${arrayCube}`);
console.log("=====================step2========================");
const indexArray=arrayNumbers.map((Element,index)=>{
    return Element+index;
})
console.log(`new array Adding index into each element is ${arrayNumbers}====>${indexArray}`);
