//video number 077

//find value

var arr = [1,7,5,8];
var result = arr.find(function(value){
    return value == 7;
});
console.log(result)

// find index

var result2 = arr.findIndex(function(value){
    return value == 5
});

console.log(result2)


//try to make find function

function myFind(arr, cb){
    for(var i = 0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i]
        }
    }
}


var result3 = myFind(arr,function(value){
    return value == 5;
});

console.log(result3)


//try to make find index function 

function myFindIndex(arr, cb){
    for(var i = 0; i<arr.length; i++){
        if(cb(arr[i])){
            return i
        }
    }
}


var result4 = myFindIndex(arr,function(value){
    return value == 5;
});

console.log(result4)