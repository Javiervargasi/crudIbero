const mongoose = require('mongoose')
const app=require('./app')



mongoose.connect('mongodb://localhost/eduBit',
{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false},(err,res)=>{
    if(err){
        console.log('error en la conexion',err)
    }else{
        console.log('conectado correctamente')
        
    }
})




