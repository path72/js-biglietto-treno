//###################################################### 
//

const priceUnit = 0.21; // €/Km
var response = '';

var usrAge = prompt('Quanti anni hai?');

if (usrAge == '' || usrAge == null || isNaN(usrAge)) {
  // età errata >>> NO-GO

  alert('Mi prendi in giro? Lasciamo stare...');
  response += 'inutile aspettare trenitalia!';
  console.log('usrAge = ' + usrAge + ' >>> NO-GO (età errata)');

} else if (usrAge < 12) {
  // età troppo piccola >>> NO-GO

  var msg = 'Ma dove vuoi andare così piccolo??\n';
  if (usrAge < 3 ) msg += 'Non gattoni nemmeno!'; 
  else msg += 'Metti in ordine la cameretta!'; 
  alert(msg);
  
  response += 'viaggia sicuro senza trenitalia!';
  console.log('usrAge = ' + usrAge + ' >>> NO-GO (età troppo piccola)');

} else {
  // età OK >>> GO

  var usrKm  = prompt('Quanti km vuoi percorrere?');

  if (usrKm == '' || usrKm == null || isNaN(usrKm)) {
    // età OK + distanza errata >>> NO-GO

    alert('Non hai di meglio da fare?\nGuardati una serie TV...');
    response += 'sempre in orario... con le Ferrovie Federali Svizzere!';
    console.log('usrAge = ' + usrAge + ', usrKm = ' + usrKm + ' >>> NO-GO (età OK, distanza errata)');

  } else {
    // età OK + distanza OK >>> GO

    if (usrKm < 15) {
      // età OK + distanza OK piccola > solo commento

      var suffix = (usrKm == 1) ? 'o' : 'i';
      alert('Mi vuoi fare spostare un treno solo per ' + usrKm + ' chilometr' + suffix + '?\nVabbé, tanto siamo in manutenzione...');

    }

    if (usrKm > 480000000) {
      // età OK + distanza OK Marte > solo commento

      alert('Ma se non siamo in grado di arrivare puntuali, secondo te arriviamo oltre Marte?\nVediamo quanto ti costerebbe il super-bigletto...');
      response += 'Ehy, Spacewalker! ';

    }

    var ticketPrice = priceUnit * usrKm;
    console.log('usrAge = ' + usrAge + ', usrKm = ' + usrKm + ' >>> GO (tutto OK)\nprezzo base: €' + ticketPrice);
  
    if      (usrAge < 18) { ticketPrice *= 0.8; alert('Minore di 18 anni: sconto del 20% !'); } 
    else if (usrAge > 65) { ticketPrice *= 0.6; alert('Maggiore di 65 anni: sconto del 40% !'); } 

    ticketPrice = (Math.round(ticketPrice*100)/100).toFixed(2);
    console.log('prezzo finale: €' + ticketPrice);

    response += 'Spenderesti €' + ticketPrice + ' ... ';
    response += (usrKm > 480000000) ? 'Godspeed!' : 'se il treno partisse davvero!';
  
  }

  // niente tra queste parentesi!

}

document.getElementById('response').innerHTML = '<a href="../index.html">' + response + '</a>';

//###################################################### 
//

