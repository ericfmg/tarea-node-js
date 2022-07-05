const express = require('express')
const app = express()
const port = 5000
const {json} = require("body-parser")
app.use(json())

app.get('/api/paroimpar', (request, response) => {
    let num1 = request.body.num1
    
    let result;
    if (num1 % 2 === 0){
        result = `El número ${num1} es par`
    }else {
        result = `El número ${num1} es impar`
    }

    let obj = {
       result:result
    }
    return response.status(200).json(obj)
})


app.listen(port, () => {console.log(`Ejecutando api en el puerto ${port}`)})


