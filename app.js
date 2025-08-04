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
 
// desafios

//1 Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador <= 10) {
    console.log(`Mostrando el numero ${contador}`);
    contador ++;
}

//2 Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorDos = 10;
while (contadorDos >= 0) {
        console.log(`Mostrando el numero ${contadorDos}`);
        contadorDos--;
}
//3 Crea un programa de cuenta regresiva. 
// Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' 
// en la consola del navegador.
let pideNumero = prompt('Ingresa un numero');
contador = 0;
while (contador <= pideNumero) {
    console.log(`Cuenta regresiva: ${pideNumero - contador}`);
    contador++;
}

// 4 Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese 
// número utilizando un bucle 'while' en la consola del navegador.
let solicitaNumero = prompt('Ingresa en numero para la cuenta progresiva');
contador = 0;
while(contador <=solicitaNumero){
    console.log(`Cuenta progresiva: ${contador}`);
    contador++;
}