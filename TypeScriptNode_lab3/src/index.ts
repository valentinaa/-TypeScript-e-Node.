//1.
class Circulo{
private _x: number
private _y: number
private _r: number
constructor(x: number, y: number, r: number) {
this._x = x;
this._y = y;
this._r = r;
}
area(): void {
    console.log(Math.sqrt(this._r)*Math.PI);
        }
circunferencia():void{
    console.log(2*Math.PI*this._r);
}

}

let circulo1: Circulo = new Circulo(10,12,5);
circulo1.area();

//2.
class Moeda {
    constructor(
        private _valor:number,
    ){}

    get valor():number {
        return this._valor;
    }
}

class Cofrinho {
    private moedas:Moeda[] = [];

    adicionar(umaMoeda:Moeda):void {
        this.moedas.push(umaMoeda);
    }

    calcularTotal():number {
        const somador:(x:number, y:Moeda)=>number =
                      (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }
}
let cofre:Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(2.0));
cofre.adicionar(new Moeda(3.0));
console.log(cofre.calcularTotal());
let cofre2:Cofrinho = new Cofrinho();
cofre2.adicionar(new Moeda(10.0));
cofre2.adicionar(new Moeda(3.0));
console.log(cofre2.calcularTotal());
