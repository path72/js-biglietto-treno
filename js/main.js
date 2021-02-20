//###################################################### 
//

const priceUnit = 0.21; // €/Km
var response;

var usrAge = prompt('Quanti anni hai?');

if (usrAge == '' || usrAge == null || isNaN(usrAge) == true) {
  // età errata >>> NO-GO

  alert('Mi prendi in giro? Lasciamo stare...');
  response = '<a href="../index.html">inutile aspettare trenitalia!</a>';
  console.log('usrAge = ' + usrAge + ' >>> NO-GO (età errata)');

} else if (usrAge < 12) {
  // età troppo piccola >>> NO-GO

  alert('Ma dove vuoi andare così piccolo??\nMetti in ordine la cameretta!');
  response = '<a href="../index.html">viaggia sicuro senza trenitalia!</a>';
  console.log('usrAge = ' + usrAge + ' >>> NO-GO (età troppo piccola)');

} else {
  // età OK >>> GO

  var usrKm  = prompt('Quanti km vuoi percorrere?');

  if (usrKm == '' || usrKm == null || isNaN(usrKm) == true) {
    // età OK + distanza errata >>> NO-GO

    alert('Non hai di meglio da fare?\nGuardati una serie TV...');
    response = '<a href="../index.html">treni sempre in orario con SBB!</a>';
    console.log('usrAge = ' + usrAge + ', usrKm = ' + usrKm + ' >>> NO-GO (età OK, distanza errata)');

  } else {
    // età OK + distanza OK >>> GO

    if (usrKm < 15) {
      // età OK + distanza OK piccola > solo commento

      var suffix = 'i'; if (usrKm == 1) suffix = 'o';
      alert('Mi vuoi fare spostare un treno solo per ' + usrKm + ' chilometr' + suffix + '?\nVabbé, tanto siamo in manutenzione...');

    }

    var ticketPrice = priceUnit * usrKm;
    console.log('usrAge = ' + usrAge + ', usrKm = ' + usrKm + ' >>> GO (tutto OK)\nprezzo base: €' + ticketPrice);
  
    if      (usrAge < 18) { ticketPrice *= 0.8; alert('Minore di 18 anni: sonto del 20% !'); } 
    else if (usrAge > 65) { ticketPrice *= 0.6; alert('Maggiore di 65 anni: sconto del 40% !'); } 

    ticketPrice = (Math.round(ticketPrice*100)/100).toFixed(2);
    console.log('prezzo finale: €' + ticketPrice);

    response = '<a href="../index.html">Spederesti €' + ticketPrice + ', se Trenitalia funzionasse!</a>';

  }

  // niente tra queste parentesi!

}

document.getElementById('response').innerHTML = response;

//###################################################### 
//

