
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




// objeto de variables globales

const partidos = {ganados: 0, empatados: 0, perdidos: 0};

let puntos = 0;
let suma = 0;


// declarando función

function calcular () {

    let pregunta = prompt("Pronosticar cuantos pts sumará Arg (G=3,E=1,P=0)"); //variable local


    switch (pregunta){
    case "G":
    suma = 3;
    puntos = puntos + suma;
    partidos.ganados++;
    break;
    
    case "E":
    suma = 1;
    puntos = puntos + suma;
    partidos.empatados++;
    break;
    
    case "P":
    suma = 0;
    partidos.perdidos++;
    break;
    
    default:
    alert("Valor ingresado no válido\nEl partido será invalidado, vuelva a cargar la pagina");
    break;
    } }

// for

for (let partidosMundial = 1; partidosMundial <= 3; partidosMundial++) {


calcular (); // llamando a función

console.log("Partido N° " + partidosMundial + " Argentina suma " + suma + " puntos");
console.log("En " + partidosMundial + " fechas " + " Argentina suma " + puntos + " puntos");
console.log("Resultados:\nPartidos ganados: "+partidos.ganados+"\nPartidos empatados: "+partidos.empatados+"\nPartidos perdidos: "+partidos.perdidos);

}




