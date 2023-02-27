'use script';

//JSSnack3
//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const nome = ['Marco', 'Sandro', 'Federico', 'Sonia', 'Sara', 'Antonio', 'Veronica'];

const cognome = ['Reali', 'Perini', 'Fusardi', 'Retioni', 'Lastuni'];

for (let i = 0; i < 3; i++) {

    const randomName = Math.floor(Math.random() * nome.length);

    const randomSurname = Math.floor(Math.random() * cognome.length);

    console.log(randomName + randomSurname);
}


