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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de Seguro de vida para ${obj.nome}`);
    }else{
        console.log(`Sem novas ofertas disponiveis`)
    }    
}
console.log(Object.values(cliente))
oferecerSeguro(cliente)