class ListaConvidados {
    constructor() {
        this.convidados = [];
    }

    adicionar(nome, idade, cpf) {
        this.convidados.push({nome: nome, idade: idade, cpf: cpf});
    }

    listarConvidados() {
        console.log(this.convidados);
    }
}

var listaConv = new ListaConvidados();

document.getElementById("adicionar").onclick = function() {
    var nome = document.getElementById("nome").value;

    listaConv.adicionar(nome, 22, "13898916740");
}


document.getElementById("listar").onclick = function() {
    listaConv.listarConvidados();
}