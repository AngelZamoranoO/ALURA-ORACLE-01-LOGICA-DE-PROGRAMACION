let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6
while (numeroSecreto != numeroUsuario || intentos != 0) {

    let numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al 10:`));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero es ${numeroUsuario}, lo hiciste en el ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert(`El numero secreto es menor que tu numero: ${numeroUsuario}, te quedan ${maximoIntentos - intentos} intentos`);

        } else {
            alert(`El numero secreto es mayor que tu numero: ${numeroUsuario}, te quedan ${maximoIntentos - intentos} intentos`);

        }
    }
    intentos++;
    if (intentos >= maximoIntentos) {
        alert(`Llegaste al numero maximo de ${intentos} intentos, numero secreto es: ${numeroSecreto}`);
        break;
    }
}
alert('Fin del juego');

// Desafios

// 1 Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido a programar');

// 2 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el 
// mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

let nombre = 'Angel';
console.log(`¡Hola, ${nombre}!`);

// 3 Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola, ${nombre}!`);

// 4 Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena
//  la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeFavorito = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Tu lenguaje favorito es: ${lenguajeFavorito}`);

// 5 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
// realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);


// 6 Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
// realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
//  Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 = 20;
valor2 = 10;
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}`);


// 7 Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar 
// si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = parseInt(prompt('Ingresa tu edad:'));
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}
// 8 Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo,
//  negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt('Ingrese un valor'));
if(numero > 0) {
    console.log('El número es positivo');
}else if (numero < 0) {
    console.log('El número es negativo');
}else{
    console.log('El número es cero');
}
// 9 Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
for (let index = 1; index <= 10; index++) {
    console.log(`numero -> ${index}`);
}


// 10 Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar 
// si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 8;
if (nota >= 7) {
    console.log('Aprobado');
}else{
    console.log('Reprobado');
}
    

// 11 Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(`Número aleatorio: ${numeroAleatorio}`);

// 12 Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroEnteroAleatorio = Math.floor((Math.random() * 10) + 1);
console.log(`Número entero aleatorio: ${numeroEnteroAleatorio}`);

// 13 Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroEnteroAleatorio2 = Math.floor((Math.random() * 1000) + 1);
console.log(`Número entero aleatorio: ${numeroEnteroAleatorio2}`);
/*
Tips

En esta lección, vimos cómo usar la documentación para generar un número aleatorio a través de la documentación de Mozilla.
Sin embargo, también existe W3Schools (W3S), que es un recurso en línea ampliamente conocido y utilizado para aprender diversas
tecnologías de desarrollo web, incluido JavaScript (JS).El sitio web ofrece tutoriales interactivos, ejemplos de código, referencias 
de sintaxis y conceptos fundamentales relacionados con JavaScript y otros lenguajes web.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
