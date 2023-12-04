const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('site_completo', 'root', 'senai', {
    host: 'localhost',
    dialect: 'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('Conexão realizada')
// }).catch((error)=>{
//     console.error('Erro de conexão' + error)
// })

module.exports = sequelize