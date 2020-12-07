import moment from 'moment';


export function greet() {
    var day = moment().format('dddd');
    console.log('Have a great ' + day + '!');
}



export function sayHello() {
    var day = moment().format('dddd');
    console.log('Dungnx say Hello ' + day + '!');
}

