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

//2. 3. 
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
let cofre:Cofrinho = new Cofrinho();
cofre.adicionar(new Moeda(2.0));
cofre.adicionar(new Moeda(3.0));
console.log(cofre.calcularTotal());
let cofre2:Cofrinho = new Cofrinho();
cofre2.adicionar(new Moeda(10.0));
cofre2.adicionar(new Moeda(3.0));
console.log(cofre2.calcularTotal());

//4.
abstract class Cliente{
    constructor(private _nome: string){

    }
    
    get nome(): string{
        return this._nome;
    }

    abstract getMensalidade(): number;

}

class ClienteFisico extends Cliente{
    constructor(nome: string, private _idade: number, private _salario: number){
        super(nome);
    }

    get idade(): number{
        return this._idade;
    }

    set idade(idade: number){
        this._idade = idade;
    }

    get salario(): number{
        return this._salario;
    }
    
    set salario(salario: number){
        this._salario = salario;
    }

    getMensalidade(): number{
        if(this._idade < 60){
            return 0.1*this._salario;
        }
        else{
            return 0.15*this._salario;
        }
    }
}

class ClienteJuridico extends Cliente{
    constructor(nome: string, private _mensalidade: number){
        super(nome);
    }

    set mensalidade(mensalidade: number){
        this._mensalidade = mensalidade;
    }

    getMensalidade(): number{
        return this._mensalidade;
    }
}

class CadastroClientes{
    private clientes: Cliente[] = [];

    adicionar(c: Cliente): void{

        this.clientes.push(c);
    }

    imprimirClientes(): void{
        for(let i = 1; i < this.clientes.length; i++){
            console.log(`Nome do cliente: ${this.clientes[i].nome}, Mensalidade:` + this.clientes[i].getMensalidade);
        }
    }
}
