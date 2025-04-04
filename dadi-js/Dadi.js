// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let playerScore = 0;
let computerScore = 0;
let diceRolls = [1, 2, 3, 4, 5, 6];

let playerRoll = Math.floor(Math.random() * diceRolls.length) + 1; // Genera un numero casuale tra 1 e 6 per il giocatore
let computerRoll = Math.floor(Math.random() * diceRolls.length) + 1; // Genera un numero casuale tra 1 e 6 per il computer
console.log("Il giocatore ha tirato: " + playerRoll);
console.log("Il computer ha tirato: " + computerRoll);

if (playerRoll > computerRoll) {
  console.log("Il giocatore vince!");
} else if (playerRoll < computerRoll) {
  console.log("Il computer vince!");
} else if (playerRoll === computerRoll) {
  console.log("Pareggio!");
}
