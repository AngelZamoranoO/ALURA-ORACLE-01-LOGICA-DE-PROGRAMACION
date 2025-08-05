

// let numeroDeseasJugar = parseInt(prompt('Indicame hasta que numero deseas jugar, ejemplo 1 a 100'))
 let numeroDeseasJugar = 100; 
let numeroSecreto = Math.floor(Math.random() * numeroDeseasJugar) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6
while(numeroSecreto != numeroUsuario || intentos != 0) {

    let numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numeroDeseasJugar}:`));

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
    if(intentos >= maximoIntentos){
        alert(`Llegaste al numero maximo de ${intentos} intentos, numero secreto es: ${numeroSecreto}`);
        break;
    }    
}
alert('Fin del juego');

/*
Aquí te dejo una frase para que celebremos esta victoria:
"Si siempre intentas ser normal, nunca descubrirás lo extraordinario que puedes llegar a ser." (Maya Angelou)
*/