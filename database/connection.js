import { Sequelize } from 'sequelize'


export const sequelize = new Sequelize('escreva_seu_proprio_caminho','postgres','fodao',{
    dialect: 'postgres',
    host:'localhost'
})


// sequelize.query('CREATE DATABASE escreva_seu_proprio_caminho')
// .then(console.log('Banco de dados criado com sucesso')).catch(error => console.error('Deu ruim',error))



export const testConnection = async ( ) =>{
    try {
        
        await sequelize.authenticate()
        console.log('Banco conectado com sucesso!')
    } catch (error) {
        console.log('Não foi possivel conectar ao banco de dados')
    }
   
}