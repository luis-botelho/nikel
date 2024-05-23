const nome = "Thiago Santos";
let nome2 = "Thiago Santos";
let pessoaDefault = {
    nome: "Thiago Santos",
    idade: "31",
    profissão: "programador"
}

let nomes = ["Thiago Santos", "José Pereira", "Maria Silva"];
let pessoas = [
    {
    nome: "Thiago Santos",
    idade: "31",
    profissão: "programador"
    },
    {
    nome: "Ricardo José",
    idade: "29",
    profissão: "jogador de futebol"
    }
];
function ImprimirPessoas(){
    pessoas.forEach((item) => {
        console.log("Nome: ")
        console.log(item.nome);

        console.log("idade: ")
        console.log(item.idade);

        console.log("Profissão: ")
        console.log(item.profissão);

        console.log(item);
    })
}

ImprimirPessoas();

AdicionarPessoa({
    nome = "Pedro Silva",
    idade = "28",
    profissão = "porteiro"
});

ImprimirPessoas();


