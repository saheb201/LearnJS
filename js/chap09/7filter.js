//video number 074

//filter 

var arr = [ 1, 2, 3, 4, 5];
// var filterarrr = arr.filter(function(value){
//     return value % 2 == 1;
// });

// console.log(filterarrr)

// even number arr

// try to make filter function

// function myFilter(arr){
//     var newArr = []
//     for(var i = 0; i<arr.length; i++){
//       if(arr[i] % 2 == 0){
//          newArr.push(arr[i])
//     }
   
// }
// return newArr
// }

// var evenArr = myFilter(arr);
// console.log(evenArr)


// multiple new arr  function

function myFilter(arr, cb){
    var newArr = []
    for(var i = 0; i<arr.length; i++){
      if(cb(arr[i], i , arr)){
         newArr.push(arr[i])
    }
   
}
return newArr
}


var odd = myFilter(arr, function(value){
    return value % 2 == 1;
    
});

console.log(odd)
