const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/Productos', db.getProductos)
app.get('/Productos/:id', db.geProductoId)
app.post('/newProduct',db.createProducto)




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})