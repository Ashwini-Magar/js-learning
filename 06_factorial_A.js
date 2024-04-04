

function factorialOfNum(num){
    let fact = 1;
    for (let index = num; index >= 1; index--) { 
        fact=fact * index;
        return fact;
    }

}

let re=factorialOfNum(5);
console.log(`factorial of  5 is ${re}`);
// factorialOfNum(3);
// factorialOfNum(null);
// factorialOfNum(8);
// factorialOfNum(undefined);
// factorialOfNum(9);
// factorialOfNum(0);
// factorialOfNum(NaN);
