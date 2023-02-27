'use script';

//JSsnack2
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

const valore = number(prompt('inserisci un numero'));

if (valore % 2 == 0) {
    console.log(valore);
} else {
    console.log(valore + 1);
};