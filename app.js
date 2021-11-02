const express = require('express')
const app = express()

const path = require('path')

app.use(express.static('public'))

app.listen(3000,()=>console.log("Funcionando en el puerto 3000"))



/*app.get('/', (req, res) => {
    res.sendFile(__dirname + 'views/home.html')
  })*/


app.get('/', (req, res) => {
  res.sendFile(path.resolve('views/home.html'))
})