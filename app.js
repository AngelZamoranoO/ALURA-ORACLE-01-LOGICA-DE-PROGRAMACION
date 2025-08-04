let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 5;
while(numeroSecreto != numeroUsuario || intentos != 0) {

    let numeroUsuario = prompt(`Me indicas un numero del 1 al 10: tienes ${intentos} intentos`);

    if (numeroUsuario == numeroSecreto) {
        alert('Acertaste el numero');
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor que tu numero: '+ numeroUsuario);
            
        } else {
            alert('El numero secreto es mayor que tu numero: '+ numeroUsuario);
            
        }
        intentos --;
    }
    
}
if (intentos == 0) {
    alert(`Has agotado los intentos, perdiste!!, el numero secreto es -> ${numeroSecreto}`);
}
 