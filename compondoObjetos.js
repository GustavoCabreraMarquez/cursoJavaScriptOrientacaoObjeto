const cliente = {
    nome:'Andre',
    idade:36,
    cpf:'12345677978',
    email:'andre@email.com',
    fones: ["559123454698", "45689452165"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "Filha",
    dataNascimento:"20/03/2011"
}
console.log(cliente)


cliente.dependentes.nome = "Sara Silva"


console.log(cliente)