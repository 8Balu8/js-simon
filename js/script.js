// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Comunico all'utente di memorizzare i numeri che gli mostrerò
alert(`Ora ti mostrerò 5 numeri che dovrai memorizzare`);

// Genero un array che andrò a popolare con 5 numeri casuali
const randomNumbers = [];
let showNumber;
while (randomNumbers.length < 5) {
    let showNumber = getRndInteger(1, 100);
    // Mostro i 5 numeri
    alert(showNumber);
    // Pusho nell'array i 5 numeri
    if(!randomNumbers.includes(showNumber)) {
        randomNumbers.push(showNumber);
    }
}
console.log(randomNumbers);

// Comunico all'utente che tra 30 secondi gli chiederò di scrivere i numeri
alert(`Bene, adesso hai 30 secondi per riflettere sui numeri che hai appena visualizzato`);

// Creo un array vuoto che andrò a popolare con i numeri inseriti dall'utente
const userNumberChoose = [];

// Faccio partire un timer di 30 secondi
setTimeout(function(){
    while (userNumberChoose.length < 5) {
        const userNumber = parseInt(prompt(`Digita un numero rispetto a quelli mostrati`));
        // Se il numero non è già stato insrrito lo pusho nell'array
        if (!userNumberChoose.includes(userNumber)){
            userNumberChoose.push(userNumber);
        } else {
            // Altrimenti se il numero è già stato inserito dall'utente comunico i numeri già inseriti
            alert(`Hai già inserito: ` + userNumberChoose)
        }
    }    
},10000);

console.log(userNumberChoose);

// Confronto le due array per avere il risultato di quanti ne ha indovinati
if (randomNumbers.length === userNumberChoose.lenght) {
    alert(`Complimenti!!! Hai indovinato tutti i numeri`)
}


// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }