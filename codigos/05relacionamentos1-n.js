const db = require('../models/index')
const Pessoa = db.Pessoa
const Endereco = db.Endereco
const Telefone = db.Telefone

async function addTelefone(telefone) {
    const telefoneCriado = await Telefone.create(telefone)
    console.log(telefoneCriado)
}

async function findPessoa(pessoa) {
    const findPessoa = await Pessoa.findOne({
        where: { id: pessoa },
        include: [{
            model: Telefone
        }, {
            model: Endereco
        }]
    })
    console.log(JSON.parse(JSON.stringify(findPessoa)))
}

findPessoa(1)

/*addTelefone ({
    numero: '123456798',
    pessoaId: 1
})*/