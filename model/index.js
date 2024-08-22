const {Sequelize, DataTypes} = require ('sequelize')
const databaseConfig = require('../config/dbConfig')
 
const sequelize = new Sequelize(databaseConfig.db, databaseConfig.root, databaseConfig.password, {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: databaseConfig.dialect,
    operatorsAliases: false,
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 1000
    }
}) // object

sequelize.authenticate()
.then(()=>{
    console.log("DataBase connect vayo hai ta!")
})

.catch((err)=>{
    console.log("Error aayo hai", err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({force:false}).then(()=>{
    console.log("Synced done!!")
})

module.exports = db

// without brackets () lai properties vanxa
// bracketes () lai method vanxa