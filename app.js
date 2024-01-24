//Método alert, herramienta lista a utilizar, (aqui van parametros) y comillas por ser texto
//buena practica usar ; ,  Variables camelCase
alert('Hola Mundo');
let numeroSecreto = 6;
let numeroUsuario = 0;
   
// Loops y Bucles
while (numeroUsuario != numeroSecreto) { 
    let numeroUsuario = prompt('Me indicas un numero porfavor del 1 al 10');
    console.log(numeroUsuario);
    // Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
    //console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

    //Condicionales anidados
    if (numeroUsuario == numeroSecreto) {
        alert('Acertaste, el numero es: ' + numeroSecreto);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
    }
}