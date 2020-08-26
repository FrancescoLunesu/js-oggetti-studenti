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

for (var i = 0; i <studenti.length; i++){
  console.log(studenti[i].nome);
  console.log(studenti[i].cognome);
}
