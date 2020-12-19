//PAR O IMPAR
//Crear una función expresada que al recibir un numero como parametro imprimima por consola “El número es par” si lo es, o “El número es impar” si no lo es. En el caso que el numero fuese 0 mostrar un mensaje de error. Se debe incluir un if ternario en script.

let resultado = ' '
function parImpar (numero){
    numero == 0 ? resultado = 'Error' : numero%2 == 0 ? resultado = 'El número es par' :  resultado ='El número es impar'
    return resultado
}
console.log(parImpar(0));
