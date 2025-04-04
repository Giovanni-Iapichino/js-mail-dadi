// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

const emailList = [
  "pietro@gmail.com",
  "marco@gmail.com",
  "alessandra@gmail.com",
  "mattia@gmail.com",
  "luca@gmail.com",
];
let userEmail = prompt("Inserisci la tua email:");
let access = false;

for (let i = 0; i < emailList.length && !access; i++) {
  if (userEmail === emailList[i]) {
    access = true;
  }
}

if (access) {
  console.log("Accesso consentito");
  alert("Accesso consentito");
} else {
  console.log("Accesso negato");
  alert("Accesso negato");
}
