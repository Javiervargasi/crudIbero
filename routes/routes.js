const express=require('express')
const router = express.Router()

//importamos nuestro controlador

const EstudianteController= require('../controllers/EstudianteController')

//creamos nuestro metodos

router.get('/', EstudianteController.get)

router.post('/',EstudianteController.create)

router.get('/:id',EstudianteController.getOne)

router.put('/:id',EstudianteController.update)
   
router.delete('/:id',EstudianteController.deleteStudent)


module.exports=router