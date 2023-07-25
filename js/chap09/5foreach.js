//video number 073

//for each 

var arr = [5,4,3,2,1];
arr.forEach(function(value, index, arr) {
    console.log(value,index,arr)
});


//implitation for each try to make for each function

var arr = [1,2,3,4,5]

function myForEach(arr, cb){
    for(var i=0; i<arr.length; i++){
        cb(arr[i],i,arr);
        


    }
}

myForEach(arr,function(value,index,arr){
    console.log(value,index,arr)
});
    

var sum = 0;
myForEach(arr,function(value,index,arr){
    sum+=value
  
});

console.log(sum)