const mongoose = require('mongoose')

const estudianteSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    edad:Number,
    correo:String,
    direccion:String,
    telefono:Number
})

module.exports=mongoose.model('Estudiantes',estudianteSchema,)