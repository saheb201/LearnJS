//video number 070
//higher function

function add(a,b){
    return a+b
}

function multiply(a,b ,func){
    var c = a+b;
    var d = a-b;

   return  function power(){
    var m = func(a,b);
    return c*d*m
}
}

var result = multiply(3,4,add)

console.log(result())