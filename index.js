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

//Crud Productos
app.get('/Productos', db.getProductos)
app.get('/Productos/:id', db.geProductoId)
app.post('/newProduct',db.createProducto)
app.put('/updateProducto/:id', db.updateProducto)
app.delete('/deleteProducto/:id',db.elimProducto)
//Crud Paises
app.get('/Paises', db.getPaises)
app.get('/Paises/:id', db.getPaisId)
app.post('/newPais',db.createPais)
app.put('/updatePais/:id', db.updatePais)
app.delete('/deletePais/:id',db.elimPais)
//Crud Importes
app.get('/Import', db.getPaises)
app.get('/Import/:id', db.getPaisId)
app.post('/newImport',db.createPais)
app.put('/updateImport/:id', db.updatePais)
app.delete('/deleteImport/:id',db.elimPais)




app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})