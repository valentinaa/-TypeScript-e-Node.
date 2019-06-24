//1. 
let inicio: number = 0;
let final: number = 10;
for (let i = inicio; i <= final; i++) {
    if(i%2 == 0){
        console.log(i);
    }
} 

while (inicio <= final) {
    if(inicio%2 == 0){
        console.log(inicio);
    }
    inicio++
}

//2. 
//let i: number= 0;
//while (i != 10) {
 //   i += 0.2;
//} //loop infinito

//3.
function menor(x:number, y:number): number {
    if(x < y){
        return x;
    }else{
        return y;
    }
}
    console.log(menor(4,5));

// 4. 
function iterativa(x:number, y:number): number {
    let i:number = 1;
    while(i < y ){
        i++;
        x = x + x;
    }
    return x;
}

console.log(iterativa(4,5));


//5.

function toMaiusculaPrimeira(s:string):string {
    s = s.substring(0,1).toUpperCase().concat(s.substring(1));
    return s;
}   
    console.log(toMaiusculaPrimeira('ameixa'));

//6. 
function getMax(array: number[]): number {
    let maior = array[0];
    for (let valor of array){
        if(valor > maior){
            maior = valor;
        }
    }
    return maior;
}

console.log(getMax([1,6,4,6,0]));

//7. 

function frequencia(array: number[]) : Map<number, number>{ 
    let contagem = new Map<number,number>();
    for (let valor of array){
        if (contagem.has(valor)){
            contagem.set(valor, contagem.get(valor)!+1);
        }else{
            contagem.set(valor,1);
        } 
    }
    return contagem;
}

function frequencia2(array: number[]): Map<number,number> {
    return array.reduce((contagem, valor) =>
    contagem.set(valor, contagem.get(valor)! +1), new Map<number,number>());
} // versão do  professor

console.log(frequencia([1,6,2,0,8,6]));