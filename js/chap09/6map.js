//video number 074
var arr = [1,2,3,];
var sqrArr = arr.map(function(value){
    return value * value
}) ;

// console.log(sqrArr)

//try make map function

function myMap(arr ,cb){
    var newArr = []
    for(var i = 0; i<arr.length; i++){
        var temp = cb(arr[i])
        newArr.push(temp)
       
    }
    return newArr
}

var sqr = myMap(arr, function(value){
    return value * value
});

console.log(sqr)

var multi = myMap(arr,function(value){
    return value * 10;
});
console.log(multi)