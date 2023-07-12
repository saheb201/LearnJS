//video number 23

var a = 10;
var b = 10;

if(a > b){
    console.log("A is greater Than B");

}else if(a < b){
    console.log("B is greater Than B");

}else{
    console.log(' They Both is Same');
}


var n = 0;
if(n == 0){
    console.log("This is A zero")

}else if(n % 2 == 0){
    console.log('This is a Even Number')

} else{
    console.log('This is a Odd Number')
}



var date = new Date();
var today = date.getDay()

// var today = 6

if(today == 0){
    console.log('Sunday');

}else if(today == 1){
    console.log('Monday');

}else if(today == 2){
    console.log('Tuesday');
    
}else if(today == 3){
    console.log('WednesDay');

}else if(today == 4){
    console.log('ThursDay')
}
if(today == 5){
    console.log('FriDay');

}else if(today == 6){
    console.log('SaturDay');
}else{console.log('not a valid number')}

