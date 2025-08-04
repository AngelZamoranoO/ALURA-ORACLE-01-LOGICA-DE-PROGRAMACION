// comentario lineal

/*
Bloque de comentario
*/

// el tempplate string es la conbinacion de string con varibales y se puede hacer asi, 
// tambien se puede escribi codigo de js
// `hola como estas ${nombre}`

// variables
let numeroSecreto = 9;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log('numero del usuario', numeroUsuario);
console.log('Numero secreto',numeroSecreto)

console.log('Validacion de la respuesta del usuario', numeroUsuario == numeroSecreto);

// condicion
if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    alert(`No acertaste el numero, el numero secreto es: ${numeroSecreto}` );
}

// DESAFIOS

//1. Pregunta al usuario qué día de la semana es.
//  Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaDeSemana = prompt('Que dia de la semana es');
// convierte el primer valor de la respuesta en mayuscula
diaDeSemana.replace(diaDeSemana.charAt(0),diaDeSemana.charAt(0).toUpperCase());

if (diaDeSemana == 'Sabado' || diaDeSemana == 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}

//2 Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let ingreseNumero = prompt('Ingrese un numero');
if (ingreseNumero > 0) {
    alert(`El numero es positivo -> ${ingreseNumero}`);
} else if (ingreseNumero == 0) {
    alert(`El numero es neutro -> ${ingreseNumero}`);
} else {
    alert(`El numero es negativo -> ${ingreseNumero}`);
}

//3 Crea un sistema de puntuación para un juego.
//  Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
// En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt('Ingrese su puntuacion');
if (puntuacion >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intentalo nuevamente para ganar.');
}

// 4 Crea un mensaje que informe al usuario sobre el saldo de su cuenta,
//  utilizando un template string para incluir el valor del saldo.
let saldo = 100;
let mensaje = `Su saldo disponible es: ${saldo}`;
alert(mensaje);

// 5 Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt('Ingrese su nombre');
alert(`Bienvenido ${nombre}`);