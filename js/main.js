//###################################################### 
//

const priceUnit = 0.21; // €/Km

var usrAge      = prompt('Quanti anni hai?');
var usrDistance = prompt('Quanti km vuoi percorrere?');

console.log('age: ' + usrAge + ', Km: ' + usrDistance);

var baseTicket = priceUnit * usrDistance;

console.log('base ticket price: ' + baseTicket);

if      (usrAge < 18) baseTicket *= 0.8;
else if (usrAge > 65) baseTicket *= 0.6;

console.log('final ticket price: ' + baseTicket);

//###################################################### 
//

