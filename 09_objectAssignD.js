let professor={
    name:"Ashwni",
    subject:"java",
    age:50,
    education:"MCA",
    college:"SMS",
degrees:{
    engineering:"CSC",
    PHD:"Adv Computing",
    graduate:"BCA",
    PostGraduate:"MCA",
},
certificates:['hacker rank participation','Certificate in IFE','Certificate in Adv Programming']
}
professor.name="manjiri";
console.log("after modify property object ");
console.log(professor);
professor.totalExperience="14 years";
professor.certificates.splice(2,0,"Oracle Certificate");
console.log(professor.certificates);
console.log(`last element in array :${professor.certificates[professor.certificates.length-1]}`);
console.log(professor);
console.log("accessing array element by for of loop");
for (const element of professor.certificates) {
    console.log(element);
}