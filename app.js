const express = require('express')
const app = express()
const bodyParser=require('body-parser')
const cors = require('cors')
const port =3000

app.listen(port,()=>{
    console.log("escuchando por el",port)
})
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
//cargamos nuestros metodos
app.use('/api/estudiantes',require('./routes/routes'))



module.exports = app;