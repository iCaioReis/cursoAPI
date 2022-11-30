const db = require('../models/index')
const Pessoa = db.Pessoa
const PessoaSeguidor = db.PessoaSeguidores

async function addSeguidor(pessoaSeguidor){
    const seguidorCriado = await PessoaSeguidor.create(pessoaSeguidor)
    console.log(seguidorCriado)
}

async function findPessoa(idPessoa){
    const pessoaEncontrada = await Pessoa.findOne({
        where: {id: idPessoa},
        include: [{
            model: Pessoa,
            as: 'seguindo',
            through: {
                attributes: []
            }
        },{
            model: Pessoa,
            as: 'seguindores',
            through: {
                attributes: []
            }
        }
    ]

    })
    console.log(JSON.parse(JSON.stringify(pessoaEncontrada)))
}
/*addSeguidor({
    pessoaId: 3, 
    seguePessoaId: 1
})*/

 findPessoa(3)