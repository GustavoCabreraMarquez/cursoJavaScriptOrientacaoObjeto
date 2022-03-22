const colecionador = {
    nome:"João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joão@email.com"
}
// console.log(colecionador.nome)

console.log(colecionador["nome"])

function adicionarTipo (propriedade,tipo){
    this[propriedade].push(tipo)
}

for(i = 0; i < 4; i++) {
    adicionarTipo("tipocolecao", "HQ"+1)
}
