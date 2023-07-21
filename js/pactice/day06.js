/*// chap 01

console.log('Hello World !')

//chap 02

// Mtah Function
console.log(Math.E);
console.log(Math.PI);
var a = 4.49;
console.log(Math.abs(a));
console.log(Math.ceil(a));
console.log(Math.floor(a));
console.log(Math.round(a));
console.log(Math.max(20,25));
console.log(Math.min(20,10));
console.log(Math.round(Math.random()*10 + 1));

// date function

var date = new Date;
console.log(date.getDate());

// chap 03 condition

var age = 46;

if(age < 18){
    console.log("He is child")

}else if(age > 18 && age < 45 ){
    console.log("He is teenager ")

}else if(age >  45  && age < 60 ){
    console.log("He is Young man")

}else{console.log("He is a sineor cityzeen ")} 


// swich 

var date = new Date;
var today = date.getDay()

switch(today){
    case 0 : 
    console.log("sunday");
    break

    case 1 : 
        console.log("Monday");
        break

    case 2 : 
        console.log("Tuesday");

    case 3 : 
        console.log("Wednues day");
        break

    case 4 : 
        console.log("Thurse day");
        break

    case 5 : 
        console.log("friday");
        break

    case 6 : 
        console.log("saturday")
        break
}

// turnary 

var a = 30;
var b = 20;

var bigger = a > b ? "A bigger than B" : "B bigger than A"
console.log(bigger)

// chap 04 
// For loop

for(var i = 0; i<10; i++){
    console.log("print" ,i)
}
  


for(var i = 0; i<10; i++){
    if(i % 2 == 0){
        console.log( "even number ",i)
    }
}

for(var i = 0; i<10; i++){
    if(i % 2 == 1){
        console.log( "odd number ",i)
    }
}

// while loop

while(true){
    var num = Math.floor(Math.random()*10 + 1);
    if(num == 9){
        console.log("Data find " , num);
        break;
    }else{console.log("you data not found")}
}



// do while loop
 var  isRunning = true;
do{
    console.log(' is running false')
    
}while(isRunning)

//nested loop
// out put 
// 1
// 12
// 13

var a = 5;
for(var i = 1; i <= a; i++){
   var result ="  " ;
   for(var j = 1; j <= i; j++){
     result += j;
    
   }
   console.log(result ) ;
}



var a = 5;
for(var i = 1; i <= a; i++){
   var result =" * " ;
   for(var j = 1; j <= a; j++){
     result += " * ";
    
   }
   console.log(result ) ;
}

// contunie

for(var i = 0; i<10; i++){
    if(i == 3 || i == 7){
        continue;
       
    }else{
        console.log(i)
    }
}


// infinity loop

for(; ;){
    var num = Math.floor(Math.random()*10)
    if(num == 9){
     console.log("We have got your number", num);
     break;
    }else{console.log("you are win")}
}

// chap 06
// array travers

var arr = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
}


//array reverse
var arr = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < arr.length / 2; i++){
    var temp = arr[i]
    arr[i] = arr[arr.length -1 -i]
    arr[arr.length -1 -i] = temp
}

console.log(arr)



// find data from array

var arr = [10, 50, 80, 40, 1, 8]

var find = 11;
var found = false;
for(var i = 0; i< arr.length; i++){
    if(find == arr[i]){
        console.log("your data is = ", arr[i], " index = ", i)
        found = true;
    }
}if(!found ){
    console.log("your data is not found")
}


// multi daimantion  array


var arr = [
    [50,55,77,44],
    [22,44,77,66],
    [55,77,88,55]
]

for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    for(var j = 0; j < arr[i].length; j++){
        console.log("element" + i + " : " +arr[i][j])
    }
}

// chap 08 function

function add(){
    console.log(2+2)
}
add()
// argument

function addAll(){
    var sum = 0;
    for(var i = 0; i< arguments.length; i++){
        sum += arguments[i];
       
    }
    console.log(sum)
}

addAll(20,20,5,5)

// expration 

var addSum = function(a,b){
    console.log(a+b);
    return a + b;
}


addSum(20,25)    


// this function for age statues
function ageStatus(age){
  

if(age < 18){
    console.log("He is child")

}else if(age > 18 && age < 45 ){
    console.log("He is teenager ")

}else if(age >  45  && age < 60 ){
    console.log("He is Young man")

}else{console.log("He is a sineor cityzeen ")} 
}

ageStatus(60)
var a = 10;
ageStatus(a)

*/

// // sum a array value
// function addAll(arr){
//     var sum = 0;
//     for(var i = 0; i< arr.length; i++){
//         sum += arr[i];
       
//     }
//     console.log(sum)
// }


// var arr1 = [20,25,5,20]
// addAll(arr1)


