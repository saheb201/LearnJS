//video number 80

function sayHi(n){
    if(n == 3){
        return
    }
    console.log("I Am calling")

    sayHi(n-1)
}

sayHi(5)


function sum(n){
    if(n==1){
       return 1
    }
    return n + sum(n-1)
}

console.log(sum(10));


function factorial(n){
    if(n == 1){
        return 1
    }
    return n * factorial(n-1)
}


console.log(factorial(3));

var arr = [1,2,3,4,5];
function arrSum(arr, lastIndex){
    if(lastIndex < 0){
        return 0;
    
    }

    return arr[lastIndex] + arrSum(arr, lastIndex -1)
};
console.log(arrSum(arr, arr.length -1))