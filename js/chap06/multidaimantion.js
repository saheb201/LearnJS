//multi daimantion array
//video number 047
var arr = [
    [50,55,77,44],
    [22,44,77,66],
    [55,77,88,55]
]
// acess full array
console.log(arr[0])
console.log(arr[1])
console.log(arr[1])

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}
// acess value

console.log(arr[0][0])

for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    for(var j = 0; j < arr[i].length; j++){
        console.log("element" + i + " : " +arr[i][j])
    }
}