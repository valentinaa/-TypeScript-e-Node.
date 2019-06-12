"use strict";//
//laboratorio 2
//exercicio 1 
let inicio = 0;
let fim = 10;
let numero = 0;
let contador = 0;
for (contador = inicio; contador != fim; contador++) {
    console.log(numero);
    numero = numero + 2;
}
numero = 0;
contador = 0;
while (contador != fim) {
    console.log(numero);
    numero = numero + 2;
    contador++;
}
//exercicio 3
function min(x, y) {
    if (x < y) {
        return x;
    }
    else
        return y;
}
console.log("menor numero: " + min(2, 3));
//exercicio 4
function pow(x, y) {
    let cont = 1;
    let result = 1;
    if (y == 0) {
        return 1;
    }
    while (cont <= y) {
        result = result * x;
        console.log(result);
        cont++;
    }
    return result;
}
console.log(pow(2, 5));
//# sourceMappingURL=index.js.map