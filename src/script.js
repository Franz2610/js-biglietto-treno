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

// prezzo
const prezzo = kmUtente * num;

console.log(etaUtente + kmUtente + num );

//messaggio 
let messaggio = 'Il prezzo del biglietto è :';
let sconto = 'Con uno sconto di : ';
let tot = 'Il totale sarà di : ';



document.getElementById('treno').innerHTML=
`
<h1>${messaggio} ${prezzo.toFixed(2)} € </h1>
`;

if (etaUtente < 18 ) {
    document.getElementById('treno').innerHTML=
`
<h1>
    ${messaggio} ${prezzo} € 
</h1>;
<h1>
    ${sconto} ${kmUtente * num * 0.20} € 
</h1>;
<h1>
    ${tot}    ${(prezzo * 0.80).toFixed(2)}
</h1>;
`;
} 
if (etaUtente > 65 ) {
    document.getElementById('treno').innerHTML=
`
<h1>
    ${messaggio} ${kmUtente * num} € 
</h1>;
<h1>
    ${sconto} ${kmUtente * num * 0.40} € 
</h1>;
<h1>
    ${tot}    ${(prezzo * 0.60).toFixed(2)}
</h1>;
`;
}









