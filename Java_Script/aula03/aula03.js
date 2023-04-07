/*
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);  
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

compararPessoas(vitor, renan);
*/
//ctor TAB TAB = CONSTRUTOR RAPIDO
/*
class carro{
    marca;
    cor;
    gastoMedioporKm;

    constructor(marca, cor, gastoMedioporKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioporKm = gastoMedioporKm;
    }

    calcularGastoPercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioporKm * precoCombustivel; 
    }
}

const uno = new carro('Fiat', 'Prata', 1 / 15);

console.log(uno);
uno.calcularGastoPercurso(70, 5);
console.log(uno.calcularGastoPercurso(70, 5));
*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));

