const app = require('./app')
const db = require('./db')
require("dotenv").config();
const {PORT} =process.env
require('./models/relations')
const createAdmin = require("../src/Controllers/createAdmin")
const chargeProductsDB = require("./Controllers/ProductChargeDB.js")



app.listen(PORT,()=>{
    db.sync({force:true})
    .then(()=>chargeProductsDB())
    .then(()=>createAdmin())
    .then(console.log('Conectado a la BBDD'))
    .then(console.log(`Escuchando en el puerto ${PORT}`))
    .catch((e)=>console.log(e))
})
