/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
for (let i = pets.length - 1; i >= 0; i--) {
  console.log(pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let pet = pets.shift();
pets.push(pet);
console.log(pets);
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
cars[0].licensePlate = "XER-3902";
cars[1].licensePlate = "MYZ-9020";
cars[2].licensePlate = "LB 68717";
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let newCar = {
  brand: "Ferrari",
  model: "Testarossa",
  color: "red",
  trims: ["sport", "ultimate"],
  licensePlate: "XPX 039",
};
cars.push(newCar);
console.log(cars);
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  let newTrim = cars[i].trims[0];
  justTrims.push(newTrim);
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.startsWith("b")) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let n = 0;
let i = 0;
while (n !== 100) {
  /*se vogliamo stampare anche il 32 la condizione dovrà essere (n !== 32) */
  n = numericArray[i];
  console.log(n);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const AlphabeticPosition = [];
for (let i = 0; i < charactersArray.length; i++)
  switch (charactersArray[i]) {
    case "a":
      AlphabeticPosition.push(1);
      break;
    case "b":
      AlphabeticPosition.push(2);
      break;
    case "c":
      AlphabeticPosition.push(3);
      break;
    case "d":
      AlphabeticPosition.push(4);
      break;
    case "e":
      AlphabeticPosition.push(5);
      break;
    case "f":
      AlphabeticPosition.push(6);
      break;
    case "g":
      AlphabeticPosition.push(7);
      break;
    case "h":
      AlphabeticPosition.push(8);
      break;
    case "i":
      AlphabeticPosition.push(9);
      break;
    case "l":
      AlphabeticPosition.push(10);
      break;
    case "m":
      AlphabeticPosition.push(11);
      break;
    case "n":
      AlphabeticPosition.push(12);
      break;
    case "o":
      AlphabeticPosition.push(13);
      break;
    case "p":
      AlphabeticPosition.push(14);
      break;
    case "q":
      AlphabeticPosition.push(15);
      break;
    case "r":
      AlphabeticPosition.push(16);
      break;
    case "s":
      AlphabeticPosition.push(17);
      break;
    case "t":
      AlphabeticPosition.push(18);
      break;
    case "u":
      AlphabeticPosition.push(19);
      break;
    case "v":
      AlphabeticPosition.push(20);
      break;
    case "z":
      AlphabeticPosition.push(21);
      break;
    default:
      console.log("la lettera non appartiene all'alfabeto italiano!");
  }
console.log(AlphabeticPosition);
