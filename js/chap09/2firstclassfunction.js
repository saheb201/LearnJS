//video number 069

//what is the first class function
`  1.A Function Can be stored in a variable 
   2.a function can be stored in a array
   3.a function can be stored in a object
   4.we can create function as need
   5.we can pass function as an arguments
   6.we can return function from another function`

function add(a,b){
    return a+b
}
//1.A Function Can be stored in a variable 

    var sum = add(10,20)
    console.log(sum)

//   2.a function can be stored in a array
    var arr = [];
    arr.push(add)
    console.log(arr)
    console.log(arr[0](5,3))
//3.a function can be stored in a object
    var obj = {
        sum : add
    }
    console.log(obj)
    console.log(obj.sum(2,8))

// 4.we can create function as need
setTimeout(function(){
    console.log('I Have create a function......')
},1000)

