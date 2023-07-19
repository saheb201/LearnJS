//video number 051

//object decration 

var obj = {};

console.log(obj)
console.log(typeof(obj))
obj.x = 10;
console.log(obj)

var obj = {
   x : 10,
   y : 20,


}

// update obj value
obj.z = 55;
console.log(obj)


// object constractore
var obj2 = Object()
console.log(obj2)

// video number 052
// acess value
var point = {
    x : 10,
    y : 20,
    z : 30
}
console.log(point.x) // dot notation
console.log(point.y)
console.log(point['z'])  // array notation must string
var show = 'y'
console.log(point[show])