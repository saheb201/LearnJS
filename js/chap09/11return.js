//video number 079

function greet(msg){
    function sayHi(name){
        return msg + " " + name + " !"
    }
    return sayHi;
};


var gm = greet('good morning');
var msg = gm('saheb')
console.log(msg);


function base(b){
    return function(n){
        var result = 1;
        for(var i = 0; i<b; i++){
            result *= n
        }
        return result;

    }
};

var base5 = base(5);
console.log(base5(2))