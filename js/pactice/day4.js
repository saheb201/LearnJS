// pactise day 04

//array problem slovred

/*//#1 — Print the numbers from array
var arr = [10,20, 40, 50]
for(var i = 0; i<arr.length; i++){
    console.log(arr[i])
}


//#2 — Print sum numbers the  array
var arr = [10,20, 40, 50]
var sum = 0;
for(var i = 0; i<arr.length; i++){
    sum += arr[i]
    
}
console.log(sum) 

//#3 — Print odd numbers the  array
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
        console.log(arr[i])
    }
}  

//#4 — Print even numbers the  array
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}

//	#5 — Print odd numbers multipliction from the array
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var oddMulti = Number(1);
for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 1){
        oddMulti *= arr[i]
        console.log(oddMulti)
    }
    
}
// console.log(oddMulti)

//#6 — Print even numbers multipliction from the array
var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var evenMulti = Number(1);
for(var i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        evenMulti *= arr[i]
        console.log(evenMulti)
    }
    
}
// console.log(oddMulti)

//#7 — Print even numbers sum from the  array

var arr= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenSum = 0;
for(var i = 0; i<arr.length; i++){
     if(arr[i] % 2 == 0){
        evenSum += arr[i]
     }
}
console.log(evenSum) 

//#8 — Print odd numbers sum from the  array
var arr= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddSum = 0;
for(var i = 0; i<arr.length; i++){
     if(arr[i] % 2 == 1){
        oddSum += arr[i]
     }
}
console.log(oddSum)

 */

//#9 — Print the reverse numbers from array

// var arr= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(var i = 0; i < arr.length/2; i++){
//     var temp = arr[i]
//     arr[i] = arr[arr.length  -1 -i]
//     arr[arr.length -1 -i] == temp
   
// }
// 	console.log(arr)

    // //#10 — Print the  numbers from multidaimantion array 
    // arr = [
    //     [50,55,77,44],
    //      [22,44,77,66],
    //     [55,77,88,42]
    // ]

    // for(var i = 0; i<arr.length; i++){
    //     // console.log(arr[i])
    //     for(var j = 0; j<arr[i].length; j++){
    //         console.log('element ' + i + " : " + arr[i][j])
    //     }
    // }

    // // #9-- Write a JS code to print a pattern using for loop(
	// // 	example		
	// // 	1 
	// // 	1 2
	// // 	1 2 3 
	// // 	1 2 3 4
	// // 	1 2 3 4 5 )
     var num = 5;
    for(var i = 1; i<=num; i++){
        var result = " "

        for(var j = 1; j<=i; j++){
            result += j
           
        }
        console.log(result)
    } 

