//salvarCofrinho(Cofrinho,nomeArquivo)e lerCofrinho(nomeArquivo)

import {promises} from 'fs';
import {Cofrinho, Moeda} from './entidades';

export function salvarCofrinho(){
    const cofrejs = JSON.stringify(cofre);
    return promises.writeFile(nomeArquivo, cofrejs);
}

export function lerCofrinho(nomeArquivo: string): Promise<Cofrinho> {
    return promises.readFile(nomeArquivo,'utf-8')
    .then(dados => JSON.parse(dados))
    .then(obj => {
        const cofre = new Cofrinho();
        for(let i=0; i<obj._moedas.length; i++){
            cofre.adicionar(new Moeda(obj._moedas[i]._valor, obj._moedas[i]._nome));
        }
        return cofre;
    });
}