'use script';

//JSsnack1

//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

                 //for//
// let somma = 0;

// for (let i = 0; i < 5; i++) {
    
//     let addendo = Number(prompt('inserisci un numero:'));
//     somma += addendo;
//     console.log(somma);
// }
// alert(somma);

                  //while//
let i = 0;
let somma = 0;

while ( i < 5 ) {
    let addendo = Number(prompt('inserisci un numero:'));
    somma += addendo;
    console.log(somma);
    i++;
}
alert(somma);