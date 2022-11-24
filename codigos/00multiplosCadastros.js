// Realizando múltiplos cadastros no banco de dados
const db = require ('../models/index')
const Pessoa = db.Pessoa

const data = [
    {
        nome: 'Caio',
        sobrenome: 'Reis',
        cpf: '111.111.111-11',
        email: 'contato.caioreis3186@gmail.com',
        rg: '12345678'
    }, {
        nome: 'João',
        sobrenome: 'Reis',
        cpf: '111.111.111-11',
        email: 'contato.joaoreis3186@gmail.com',
        rg: '12345678'
    }, {
        nome: 'Maria',
        sobrenome: 'Reis',
        cpf: '111.111.111-11',
        email: 'contato.mariareis3186@gmail.com',
        rg: '12345678'
    }
]

function multiplosCadastros (data){
    Pessoa.bulkCreate(data).then(pessoa => console.log(pessoa))
}

multiplosCadastros(data)