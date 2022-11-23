//Arquivo para testar o funcionamento do banco de dados

//importando banco de dados
const db = require('../models/index')
//Acessando tabela pessoas
const Pessoa = db.Pessoa

function criarPessoa() {
    Pessoa.create({
        nome: 'Caio',
        sobrenome: 'Reis',
        cpf: '111.111.111-11',
        email: 'contato.caioreis3186@gmail.com',
        rg: '12345678' 
    }).then(pessoa => console.log(pessoa))
}

function atualizarPessoa(id) {
    Pessoa.update({
        cpf: '123.456.789.00'
    },{
        where: {
            id: id
        }
    }).then(pessoa => console.log(pessoa))
}

function deletarPessoa(id){
    Pessoa.destroy({
        where : {
            id: id
        }
    }).then(pessoa => console.log(pessoa))
}

// criarPessoa()
// atualizarPessoa(1)
// deletarPessoa(1)