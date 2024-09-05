

const databaseConfig = {
    db : process.env.DB, 
    username : process.env.USERNAME3, 
    password : process.env.PASSWORD, 
    host : process.env.HOST, 
    port : 30493, 
    dialect : 'mysql'
}

module.exports = databaseConfig
