const bankSbi={
    name:"SBI",
    address:"pune",
    branchCode:325345,
    ifscCode:5786878,
}
const bankLocation={
    street:"maromanagar",
    city:"pune",
    pin:325345,
    
}
let clone=Object.assign({},bankSbi,bankLocation)
console.log(`clone bankSbi and bankLocation using object.assign()`);
console.table(clone)
const rateOfInterest={
    homeLoanInterest:15,
    personalLoanInterest:20,
    duelInterest:10
}
const sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);
console.log("merged objects ");
console.table(sbiDetails);
console.log("traversing sbiDetails object by using for in loop");
for (const key in sbiDetails) {
     
        const element = sbiDetails[key];
        
    console.log(`${key}==>${element}`);
}
