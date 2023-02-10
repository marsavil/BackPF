const app = require('./app')
const db = require('./db')
require("dotenv").config();
const {PORT} =process.env
require('./models/relations')
//const chargeOsDB = require("./Controllers/chargeOsDB.js")
//const chargeBrandsDB = require("./Controllers/brandChargeDB.js")
const chargeProductsDB = require("./Controllers/ProductChargeDB.js")



app.listen(PORT,()=>{
     db.sync({force:true})
    .then(()=>chargeProductsDB())
    //.then(()=>chargeBrandsDB() )
    //.then(()=>chargeOsDB() )
    .then(console.log('Conectado a la BBDD'))
    .then(console.log(`Escuchando en el puerto ${PORT}`))
    .catch((e)=>console.log(e))
})
