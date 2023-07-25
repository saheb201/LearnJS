//video number 072

// call back function

// function simple(a,b){
//     var c = a +b;
//     var d = a-b;

//     var result = add(c,d)
//     return result
// }

// console.log(simple(5,3))

// function add(a,b){
//     return a+b;
// }

// multipe function
function simple(a,b , cb){
    var c = a +b;
    var d = a-b;

    var result = cb(c,d)
    return result
}
var result2 = simple(8,5, function(c,d){
    return c-d;

});
console.log(result2)
