//Método alert, herramienta lista a utilizar, (aqui van parametros) y comillas por ser texto
//buena practica usar ; ,  Variables camelCase
alert('Hola Mundo');
let numeroSecreto = 6;
let numeroUsuario = 0;
//Contador
let intentos = 1;
let palabraVeces = 'vez';   
// Loops y Bucles
while (numeroUsuario != numeroSecreto) { 
    let numeroUsuario = prompt('Me indicas un numero porfavor del 1 al 10');
    console.log(numeroUsuario);
    // Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
    //console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    //Condicionales anidados
    if (numeroUsuario == numeroSecreto) {
        alert('Acertaste, el numero es: ' + numeroSecreto + " Lo hiciste en: " + intentos + palabraVeces);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        // El contador se incrementa cuando no acierta y ajuste de vez -> veces
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //break romper forzadamente el programa
        if (intentos > 3) { 
        alert('Llegaste al maximo de intentos');
        break;
        }
    }
}