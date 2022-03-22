const cliente = {
    nome: 'Andre',
    idade: 36,
    cpf: '46924806880',
    email: 'gugis360@gmail.com',
    fones: ['123456789', '123456789'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
    },
    {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNascimento: '04/01/2014'
    }
    ],
    saldo: 100,
    depositar:function(valor)
    {
        this.saldo += valor
    }
}

let relatorio= "";
for (let info in cliente){
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    }

    console.log(typeof cliente.depositar)
    console.log(relatorio)