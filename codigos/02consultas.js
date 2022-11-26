const db = require ('../models/index')
const Pessoa = db.Pessoa
// Importando operadores para consultas
const Op = db.Sequelize.Op

// Procurando por ID
function findById (id) {
    Pessoa.findByPk(id).then(pessoa => 
        console.log(pessoa)
    )
}

// Procurando por nome e retornando só os atriburos desejados
function findByName (nome) {
    Pessoa.findOne({
        attributes: ['nome', 'sobrenome'],
        where: {
            // Fazendo a pesquisa com o critério do nome, mas pode utilizar mais de um
            // critério, como o ID também...
            nome: nome
        },
        // Limpando informações desnecessárias no LOG
        raw: true
    }).then(pessoa => console.log(pessoa))
}

// Procurar por um array de ids
function findByIdIn (arrId) {
    Pessoa.findAll({
        where: {
            id: arrId
        },
        raw: true
    }).then(pessoa => console.log(pessoa))
}

// Procura a partir do index informado a quantidade de registros desejados
function findByOffsetLimit (offset, limit) {
    Pessoa.findAll({
        offset: offset,
        limit: limit,
        raw: true
    }).then(pessoa => console.log(pessoa))
}

// Procurando por operador like
function findByLike (like) {
    Pessoa.findAll({
        where:{
            nome: {
                [Op.like]: like
            }
        },
        limit: 10,
        raw: true
    }).then(pessoa => console.log(pessoa))
}

// Procurando por multiplos operadores 
function findByMultiplesOperators () {
    Pessoa.findAll({
        where:{
            // Vai procurar onde o id seja menor que 5 ou se o sobrenome for 'Harpham' 
            [Op.or]: [
                {
                    id: {
                        [Op.lte]: 5
                    }
                },
                {
                   sobrenome: 'Harpham' 
                }
            ]
        },
        raw: true
    }).then(pessoa => console.log(pessoa))
}



// findById(500)
// findByName('Jerrie')
// findByIdIn([1,2,3,4])
// findByOffsetLimit(900,10)
// findByLike('Ro%')
// findByMultiplesOperators ()
