const express = require('express')
const app = express()
const port = 5000
const {json} = require("body-parser")
app.use(json())


app.get('/api/primo', (request, response) => {
    let num1 = request.body.num1
    let result;
    let cont=0;

    for (let i=2;i<=num1;i++){
       
        if (num1%i === 0){
           cont=cont+1
        }
    }
   if (cont>1){
result=`El número ${num1} no es primo`
   }else{
    result=`El número ${num1} es primo`
   }

  
    let obj = {
       result:result
    }
    return response.status(200).json(obj)
})


app.listen(port, () => {console.log(`Ejecutando api en el puerto ${port}`)})