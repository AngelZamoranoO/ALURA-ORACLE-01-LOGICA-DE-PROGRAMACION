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
