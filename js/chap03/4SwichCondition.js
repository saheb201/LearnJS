//video number 24

var date = new Date()

// logic
// 0 sunday
//  1 monday 

var today = date.getDay()

switch(today){

    case 0 : console.log( "Sunday"); break;

    case 1 : console.log('Monday'); break;

    case 2 : console.log('TuesDay'); break;

    case 3 : console.log('WednesDay'); break;

    case 4 : console.log('ThursDay'); break;

    case 5 : console.log('Friday'); break;

    case 6 : console.log('SaturDay'); break;
    
}



