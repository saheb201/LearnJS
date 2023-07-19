//video number 053
var point = {
    x : 10,
    y : 20,
    z : 30
}
point.x = 45; // update value
point.a = 21; // assigne new value
console.log(point.d)
console.log(point)

point['y'] = 100;

var prop = 'z'
point[prop] = 55;
console.log(point)

// remove propaties
//video number 054

delete point.a
console.log(point) // remove a
