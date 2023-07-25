// video number 076

var arr = [ 1,2,3,4,5]
var sum = arr.reduce(function(prev, curr, index, arr){
    return prev + curr
},0);

console.log(sum)

//max value 
var max = arr.reduce(function(prev, curr, index, arr){
    return Math.max(prev,curr)
});
console.log(max)



//try to make reduce function
function myReduce(arr,cb, acc){
    for (var i = 0; i<arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
};

var  sum2 = myReduce(arr, function(prev, curr, index,arr){
    return prev + curr
},0);

console.log(sum2)