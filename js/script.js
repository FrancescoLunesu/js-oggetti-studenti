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
