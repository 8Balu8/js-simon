// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Genero un array che andrò a popolare con 5 numeri casuali
const randomNumbers = [];
let showNumber;
while (randomNumbers.length < 5) {
    let showNumber = getRndInteger(1, 100);
    // Mostro i 5 numeri
    alert(showNumber);
    // Pusho nell'array i 5 numeri
    randomNumbers.push(showNumber);
}
console.log(randomNumbers);

// Faccio partire un timer di 30 secondi
let seconds = 10;
const userNumberChoose = [];
const userNumber = ``;
const countDown = setInterval(function(){
    seconds--;
    console.log(seconds);
    if(seconds === 0) {
        clearInterval(countDown);
        while (userNumberChoose.lenght < 5) {
            userNumber = parseInt(prompt(`Digita un numero rispetto a quelli mostrati`));
        }
    }
},1000);

// FUNCTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }