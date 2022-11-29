const db = require ('../models/index')
const Pessoa = db.Pessoa
const Endereco = db.Endereco

async function addEndereco(endereco) {
    const enderecoCriado = await Endereco.create(endereco)
    console.log(enderecoCriado)
}

async function findEndereco(endereco) {
    const findEndereco = await Endereco.findOne({
        where: {id: endereco},
        raw: true,
        // Include usado para exibir os dados da pessoa no log
        // Logging e nest usados para formatar o log
        include: [{
            model: Pessoa
        }],
        logging: true,
        nest: true
    })
    console.log(findEndereco)
}

async function findPessoa() {
    const findPessoa = await Pessoa.findAll({
        include: [{
            model: Endereco,
            //Required irá fazer com que só retorne os cadastros de pessoas que possuem endereço
            required: true
        }],
        raw: true,
        nest: true
    })
    console.log(findPessoa)
}

/*addEndereco({
    estado: 'teste',
    cidade: 'teste',
    bairro: 'teste',
    rua: 'teste',
    numero: 'teste',
    pessoaId: 1

})*/
//  findEndereco(1)
//  findPessoa()