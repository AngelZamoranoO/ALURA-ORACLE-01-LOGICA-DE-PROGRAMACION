let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6
while(numeroSecreto != numeroUsuario || intentos != 0) {

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
    if(intentos >= maximoIntentos){
        alert(`Llegaste al numero maximo de ${intentos} intentos, numero secreto es: ${numeroSecreto}`);
        break;
    }    
}
alert('Fin del juego');