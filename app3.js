const express = require('express')
const app = express()
const port = 5000
const {json} = require("body-parser")
app.use(json())


app.get('/api/mayordeedad', (request, response) => {
    let nombre = request.body.nombre
    let apellido = request.body.apellido
    let edad = request.body.edad
    let result;

   if (edad < 18){
result=`${nombre} ${apellido} eres mejor de edad`
   }else{
    result=`${nombre} ${apellido} eres mayor de edad`
   }

  
    let obj = {
        nombrecomp: nombre +" "+ apellido,
       result:result
    }
    return response.status(200).json(obj)
})


app.listen(port, () => {console.log(`Ejecutando api en el puerto ${port}`)})