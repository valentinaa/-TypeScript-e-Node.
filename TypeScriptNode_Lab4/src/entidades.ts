export class Moeda { //precisa exportar a classe para identificar "entidades" como modulo
    constructor(
        private _valor:number,
    ){}

    get valor():number {
        return this._valor;
    }
}

export class Cofrinho {
    private moedas:Moeda[] = [];

    adicionar(umaMoeda:Moeda):void {
        this.moedas.push(umaMoeda);
    }

    menorMoeda():number{
        let menorValor: number = 0;
        for (let i = 0; i < this.moedas.length; i++){
            if(menorValor>this.moedas[i].valor){
                menorValor = this.moedas[i].valor;
            }
        }
        return menorValor;
    }
    instancia():Moeda{
        let menorValorMoeda: number = this.menorMoeda();
        return (this.moedas[menorValorMoeda]);
    }

    
    calcularTotal():number {
        const somador:(x:number, y:Moeda)=>number =
                      (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}