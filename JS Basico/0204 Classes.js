class Pessoa {
    name;
    idade;

    constructor(nome, idade) {
        this.name = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`meu nome é ${this.name} tenho ${this.idade} anos`);
    }
}

const vitor = new Pessoa("Vitor", 21);
const matheus = new Pessoa("Matheus", 24);
const lucas = new Pessoa("Lucas", 17);


vitor.descrever();
matheus.descrever();
lucas.descrever();