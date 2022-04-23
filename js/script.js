// Consegna:
// Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
// Bonus:
// Aggiungere la possibilità di scegliere un livello di difficoltà in base al quale viene generata una griglia di uno dei seguenti range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// creo la griglia cliccando sul bottone play
document.getElementById("play").addEventListener("click", function (event) {
    play();
});

//FUNZIONE
/**
 * Descrizione: la funzione crea una griglia 10x10, 9x9 o 7x7 in base alla selezione della difficoltà
 * @returns {any}
 */
function play() {
    // 1) ripuliamo il contenuto del main
    document.querySelector("main").innerHTML = "";

    // 2) definisco la grandezza della griglia in base al livello di difficoltà selezionato
    let gridSize;
    let difficulty = (document.getElementById("difficulty").value);

    if (difficulty == "1") {          
        gridSize = 100;
    } else if (difficulty == "2") {           
        gridSize = 81;
    } else if (difficulty == "3") {
        gridSize = 49;
    }

    // 3) creo gli elementi della griglia

}