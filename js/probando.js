
/*

for (let partidosMundial = 1; partidosMundial <= 3; partidosMundial++) {

    let pregunta = +prompt("Pronosticar cuantos pts sumará Arg (G=3,E=1,P=0)");
    let almacenar = pregunta;
    almacenar = almacenar + pregunta;

    if (isNaN(pregunta)) {
        break;
    } else {
        console.log("Partido N° " + partidosMundial + " Argentina suma " + almacenar + " puntos"); }
} */




// variables

let puntos = 0;
let ganados = 0;
let empatados = 0;
let perdidos = 0;
let suma = 0;

// función switch

function calcular () {

    let pregunta = prompt("Pronosticar cuantos pts sumará Arg (G=3,E=1,P=0)");

    switch (pregunta){
    case "G":
    suma = 3;
    puntos = puntos + suma;
    ganados++;
    break;
    
    case "E":
    suma = 1;
    puntos = puntos + suma;
    empatados++;
    break;
    
    case "P":
    suma = 0;
    perdidos++;
    break;
    
    default:
    alert("Valor ingresado no válido\nEl partido será invalidado, vuelva a cargar la pagina");
    break;
    } }

// for

for (let partidosMundial = 1; partidosMundial <= 3; partidosMundial++) {


   /*if (isNaN(pregunta)) {
        break;
    } else {
        console.log("Partido N° " + partidosMundial + " Argentina suma " + pregunta + " puntos"); }*/

calcular ();

console.log("Partido N° " + partidosMundial + " Argentina suma " + suma + " puntos");
console.log("En " + partidosMundial + " fechas " + " Argentina suma " + puntos + " puntos");
console.log("Resultados:\nPartidos ganados: "+ganados+"\nPartidos empatados: "+empatados+"\nPartidos perdidos: "+perdidos);

}




