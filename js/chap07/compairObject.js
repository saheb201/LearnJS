//video number  055
//comparing  two object

var obj1 = {
    x : 10,
    y : 20
}

var obj2 = {
    x : 10,
    y : 20
}



if(obj1.a == obj2.a && obj1.b == obj2.b){
    console.log(true)
}else{
    console.log(false)
}

console.log(JSON.stringify(obj1) == JSON.stringify(obj2))