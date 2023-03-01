'use strict';

// creare una funzione che verifica se il numero passato è pari o dispari
// se pari ritorna true
// altrimenti ritorna false

function pariDispari(num){

    if(num % 2 === 0){

        return 'true';
        
    }

    return 'false';
}

console.log(pariDispari(13));

console.log(pariDispari(24));