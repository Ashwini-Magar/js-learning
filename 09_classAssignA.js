console.log("============================step 1==========================================");
class Vehicle{
    constructor(vehicleName,vehicleColor,vehicleCompany,vehicleLaunchDate,vehiclePrice){
this.vehicleName=vehicleName;
this.vehicleColor=vehicleColor;
this.vehicleCompany=vehicleCompany;
this.vehicleLaunchDate=vehicleLaunchDate;
this.vehiclePrice=vehiclePrice
    }

    details()
    {
      console.log(`vehicle name==> ${this.vehicleName},vehicleColor==> ${this.vehicleColor},vehicleCompany==>${this.vehicleCompany},vehicleLaunchDate==>${this.vehicleLaunchDate},vehiclePrice==>${this.vehiclePrice}`);  
    }
    
} 
const firstVehicle= new Vehicle("XYZ","BLACK","ABC",2018,"25cr");
const secondVehicle= new Vehicle("PQR","RED","ROAR",2017,"300cr");
const thirdVehicle= new Vehicle("MNO","BLACK","ABC",2022,"2CR");
const fourthVehicle= new Vehicle("LMN","BLACK","SHY",2015,"250cr");
const fifthVehicle= new Vehicle("ZXY","royal blue","MAGIC",2018,"25cr");
console.log("traversing array object");
const array=[firstVehicle,secondVehicle,thirdVehicle,fourthVehicle,fifthVehicle];
for (const element of array) {
    element.details();
}
console.log("============================step 2==========================================");
class College{
constructor(collegeName,collegeCity,collegeUniversity,collegeEstablishedYear){
this.collegeName=collegeName;
this.collegeCity=collegeCity;
this.collegeUniversity=collegeUniversity;
this.collegeEstablishedYear=collegeEstablishedYear;
}
getDetails(){
    console.log(`collegeName==>${this.collegeName},collegeCity==>${this.collegeCity},collegeUniversity==> ${this.collegeUniversity} ,collegeEstablishedYear==>${this.collegeEstablishedYear}`);
}
}
const collegeFirst=new College("ABC","PUNE","PUNE UNIVERSITY",1999);
collegeFirst.getDetails();
const collegeSecond=new College("XYZ","MUMBAI","MUMBAI UNIVERSITY",1996);
collegeSecond.getDetails();
const collegeThird=new College("MNO","SANGOLA","SOLAPUR UNIVERSITY",2002);
collegeThird.getDetails();
const collegeFour=new College("JKL","MANGALWEDHA","PUNE UNIVERSITY",1999);
collegeFour.getDetails();