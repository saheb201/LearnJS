//video number 078

//short 

var arr =[1,-7, -9, 0,7,2,7,1,8,44,3,5,-1]
// arr.sort()
// console.log(arr)

// var result = arr.sort(function(a, b){
//     if(a > b){
//         return 1
//     }else if (a<b){
//         return -1
//     }else{
//         return 0
//     }
// });
//  console.log(result)


 var person =[
    {
        name : "a",
        age : 22
    },
    {
        name : "b",
        age :42
    },
    {
        name : "c",
        age : 18
    },
    {
        name : "d",
        age :55
    }
 ];
 var result2 = person.sort(function(a, b){
    if(a.age > b.age){
        return 1
    }else if (a.age < b.age){
        return -1
    }else{
        return 0
    }
});
 console.log(result2)

 var res2 = arr.every(function(value){
    return value % 2 == 0;
 });
 console.log(res2);

 var res3 = arr.every(function(value){
    return value >= 0;
 });
 console.log(res3)



 var res4 = arr.some(function(value){
    return value % 2 == 0;
 });
 console.log(res4);

 var res5 = arr.some(function(value){
    return value >= 0;
 });
 console.log(res5)