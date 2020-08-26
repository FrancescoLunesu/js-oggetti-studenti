// PRIMA PARTE:
// Creare un oggetto che descriva
// uno studente con le seguenti proprietà: nome, cognome ed età.

var studente = {
    "nome" : 'Andrea',
    "cognome" : 'Luchini',
    "eta" : 24,
};

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente){
    console.log(studente[key]);
}


// SECONDA PARTE:
// Creare un array di oggetti di studenti.

var studenti = [
    {
        "nome" : 'Mirco',
        "cognome" : 'Rossi',
    },
    {
        "nome" : 'Luca',
        "cognome" : 'Bianchini',
    },
    {
        "nome" : 'Matteo',
        "cognome" : 'Matteucci',
    },
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.

// for (var i = 0; i <studenti.length; i++){
//   console.log(studenti[i].nome);
//   console.log(studenti[i].cognome);
// }

// TERZA PARTE:
// Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo
// oggetto studente inserendo nell’ordine: nome, cognome e età.

var nuovoStudente = {
    "nome" : prompt("Inserisci il nome del nuovo studente:"),
    "cognome" : prompt("Inserisci il suo cognome:"),
    "eta" : parseInt(prompt("Inserisci la sua età:")),
};

studenti.push(nuovoStudente);

for (var i = 0; i <studenti.length; i++){
  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
  console.log(studenti[i].eta);
}
