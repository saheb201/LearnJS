// video number 065

// function something(gretting, name){
//     function sayHi(){
//         console.log(gretting , name)
//     }
//     sayHi()
// }

// something('good morning', 'saheb ali')


function nam(greet, name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
   var massage = greet  + " " + firstName()
   console.log(massage)
}

nam('good morning', 'saheb ali')