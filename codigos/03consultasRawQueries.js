const db = require('../models/index')
const sequelize = db.sequelize

// Raw Queries são uma outra forma de fazer consultas utilizando o código SQL

function findById (id) {
    
    sequelize.query(
        'SELECT * FROM pessoa where id = :id',
        {
            replacements: {id:id},
            type: sequelize.QueryTypes.SELECT,
            raw: true,
            // O plain é utilizado para retornar apenas um objeto
            plain: true
        }
    ).then(pessoa => console.log(pessoa))
}

function findByName (nome) {
    
    sequelize.query(
        'SELECT nome, sobrenome from pessoa where nome = :nome',
        {
            replacements: {nome: nome},
            type: sequelize.QueryTypes.SELECT,
            raw: true,
            plain: true
        }
    ).then(pessoa => console.log(pessoa))
}

function findByIdIn (arrId) {

    sequelize.query(
        'SELECT * from pessoa where id in (:arrId)',
        {
            replacements: {arrId: arrId},
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    ).then(pessoa => console.log(pessoa))
}

function findByOffsetLimit (offset, limit) {

    sequelize.query(
        'SELECT * from pessoa LIMIT :limit OFFSET :offset',
        {
            replacements: {offset: offset, limit: limit},
            type: sequelize.QueryTypes.SELECT,
            raw: true
        }
    ).then(pessoa => console.log(pessoa))
}

// findById(500)
// findByName('Jerrie')
// findByIdIn([1,2,3,4])
// findByOffsetLimit(900,10)