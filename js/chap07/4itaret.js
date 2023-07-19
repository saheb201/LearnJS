//video number 056
var obj = {
    x : 10, 
    y : 20,
    z : 30
}

console.log('x' in obj);
console.log('a' in obj)

// traverse object
// for(var i in obj){
//     console.log(i);
//     console.log(obj[i])
//     console.log( i + " " + obj[i])
// }

for(var i in obj){
    console.log(obj[i]) // for value
    console.log(i) // propatice
}
