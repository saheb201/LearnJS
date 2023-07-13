// video number 030
// var i = 1;
// while(i < 10 ){
//     console.log('saheb');
//     i++
// }

var isRunning = true;
while(isRunning){
    var num = Math.floor(Math.random()*10)
   if(num == 9){
    console.log("We have got your number", num);
    break;
   }else{console.log("you are win")}
}