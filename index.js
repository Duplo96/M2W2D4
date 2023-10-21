// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti eitra per utenti speciali.
A partire da una lista di prezzi, un clients e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};
// HO CREATO UN 4 OGGETTO PER VEDERE ANCHE LA CONDIZIONE AMBASSADOR TRUE E < FREESHIPPING

const tiziano = {
  name: "Tiziano",
  lastName: "Titone",
  isAmbassador: true,}

const prices = [34, 5, 2,10,200,300,1000,40,35];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!
const freeShipping = 100;










let clients = [];
clients.push(marco, paul, amy,tiziano);   //Clients ora è un array con dentro marco,paul,amy,tiziano
clients[0].totalShoppingCart = prices [0] + prices [4]
clients[1].totalShoppingCart = prices [0] + prices [2]
clients[2].totalShoppingCart = prices [0] + prices [5]
clients[3].totalShoppingCart = prices [0]


console.log()

for (let i = 0; i < clients.length; i++) {
  if (clients[i].isAmbassador) {
    if (clients[i].totalShoppingCart >= freeShipping) {
      clients[i].totalShoppingCart *= 0.7;
      // console.log(clients[i].name + " " + clients[i].lastName + " €" + clients[i].totalShoppingCart + " Sei un utente Ambassador e la spedizione è gratuita.");
    } else {
      clients[i].totalShoppingCart = clients[i].totalShoppingCart * 0.7 + shippingCost;
      // console.log(clients[i].name + " " + clients[i].lastName + " €" + clients[i].totalShoppingCart + " Sei un utente Ambassador e paghi le spese di spedizione.");
    }
  } else {
    if (clients[i].totalShoppingCart >= freeShipping) {
      // console.log(clients[i].name + " " + clients[i].lastName + " €" + clients[i].totalShoppingCart + " Non sei un utente Ambassador e la spedizione è gratuita.");
    } else {
      clients[i].totalShoppingCart += shippingCost;
      // console.log(clients[i].name + " " + clients[i].lastName + " €" + clients[i].totalShoppingCart + " Non sei un utente Ambassador e paghi le spese di spedizione.");
    }
  }
}
console.log(utenteCheEffettuaLAcquisto)


console.log("STAMPIAMO PER OGNI UTENTE LA PROPRIETA AMBASSADOR")
console.log()
for (let i = 0; i < clients.length; i++) {
  if (clients[i].isAmbassador)
    console.log(
      `${clients[i].name} ${clients[i].lastName}` + " è un Ambassador"
    );
  else {
    console.log(
      `${clients[i].name} ${clients[i].lastName}` + " non è un Ambassador"
    );
  }
}
console.log()
console.log("TROVIAMO I CLIENTI AMBASSADOR E PUSHIAMOLI ALL'INTERNO DI AMBASSADORCLIENTS")
console.log()

let ambassadorClients = [];
for (let i = 0; i < clients.length; i++) {
  if (clients[i].isAmbassador) {
    ambassadorClients.push(clients[i]);
  }
}
console.log(ambassadorClients);
