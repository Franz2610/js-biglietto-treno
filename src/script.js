/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca
*/



//km percorsi
const kmUtente = prompt('Inserisci i km da percorrere');


// Età utente
const etaUtente = prompt('Inserisci la tua età');


// costante prezzo per km
const num = 0.21;

console.log(etaUtente + kmUtente + num );


document.getElementById('treno').innerHTML=
`
<h1> ${kmUtente * num} € </h1>
`






