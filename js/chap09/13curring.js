//video number 080

function curring(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
};

var result = curring(10)(20)(25);
console.log(result)