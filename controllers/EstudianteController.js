//require model
const Estudiante = require('../models/Estudiantes.model')
//post
function create(req,res){
    var estudiante = new Estudiante()
    var params =req.body
   
        estudiante.nombre=params.nombre,
        estudiante.apellido=params.apellido,
        estudiante.correo=params.correo,
        estudiante.edad=params.edad,
        estudiante.direccion=params.direccion,
        estudiante.telefono=params.telefono

        estudiante.save((error,estudianteCreated)=>{
            if(error){
                res.status(500).send({
                    statusCode: 500,
                    message:"error en el servidor"
                })
            }else{
                 if(!estudianteCreated){
                    res.status(400).send({
                        statusCode:400,
                        message:'error al insertar al estudiante'
                    })
                 }else{
                    res.status(200).send({
                        statusCode:200,
                        message:"estudiante creado correctamente",
                        dataUser:estudianteCreated
                    }) 
                }
                    
            }

        })    
}

//get
function get(req,res){
    Estudiante.find((err,EstudianteEncontrado)=>{
        if(err){
            res.status(500).send({
                statusCode:500,
                message:"error del servidor"
            })

        }else {
            if(!EstudianteEncontrado){
                res.status(200).send({
                    statusCode:200,
                    message:'no fue posible encontrar el estudiante'
                })

            }else{
                res.status(200).send({
                    statusCode:200,
                    statusCode:'estudiante encontrado',
                    dataUser:EstudianteEncontrado
                    
                })
            }
           
        }
    })
};
//get by id
function getOne(req,res){
    let id = req.params.id
    Estudiante.findById(id,(err,EstudianteEncontrado)=>{
        if(err){
            res.status(500).send({
                statusCode:500,
                message:"error del servidor"
            })
        }else{
           if(!EstudianteEncontrado){
            res.status(200).send({
                statusCode:200,
                message:'no fue posible encontrar el estudiante'
            })
           }else{
            res.status(200).send({
                statusCode:200,
                statusCode:'estudiante encontrado',
                dataUser:EstudianteEncontrado
                
            })
           }
        }

    })
}
 //put

function update(req,res){
    let id = req.params.id
    const Update = req.body
    Estudiante.findByIdAndUpdate(id, Update, { new: true })
    .then((estudiante) => {
      if (!estudiante) {
        return res.status(404).send({
          message: "Estudiante no actualizado",
        });
      }
      res.status(200).send({
          message:"estudiante actualizado"
      });
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error al actualizar",
      });
    });
};

//delete
function deleteStudent(req,res){
    let id = req.params.id
   Estudiante.findByIdAndDelete(id,(err,studentDelete)=>{
       if(err){
           res.status(500).send({message:"error del servidor"})
       }else{
           if(!studentDelete){
               res.status(404).send({message:"no fue posible eliminar el estudiante"})

           }else{
               res.status(200).send({
                   status:"estudiante eliminado",
                   Estudiante:studentDelete
               })
           }
       }
   })
  
}
 module.exports=({
    create,
    get,
    getOne,
    update,
    deleteStudent
})
