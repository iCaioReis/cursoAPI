const db = require('../models/index')
const Pessoa = db.Pessoa

async function addPessoa(){
    const transact = await db.sequelize.transaction()

    try{
        await Pessoa.create({
            nome: 'Caio',
            sobrenome: 'reis',
            cpf: '123345',
            email: 'teste@gmail.com',
            rg: '1234455654'
        }, {transaction: transact})

        await Pessoa.create({
            nome: 'João',
            sobrenome: 'reis',
            cpf: '123345',
            email: 'teste@gmail.com',
            rg: '1234455654'
        }, {transaction: transact})

        await transact.commit()
        console.log('Cadastrou com sucesso!')
    } catch (error){
        await transact.rollback(0)
    }
}

async function addPessoaTransactions(){
    try {
        const result = await db.sequelize.transaction(async(t) => {
            await Pessoa.create({
                nome: 'Maria',
                sobrenome: 'reis',
                cpf: '123345',
                email: 'teste@gmail.com',
                rg: '1234455654'
            }, {transaction: t})

            await Pessoa.create({
                nome: 'Ana',
                sobrenome: 'reis',
                cpf: '123345',
                email: 'teste@gmail.com',
                rg: '1234455654'
            }, {transaction: t})
            return true;
        })
        console.log('usuarios cadastrados')
    } catch (error) {
        console.log(error)
    }
}
//addPessoaTransactions()
//addPessoa()