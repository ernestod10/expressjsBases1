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

// Configurar cabeceras y cors
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API.' })
  })



//Crud Coleccionistas

app.get('/coleccionistas', db.getColeccionistas)
app.post('/newColeccionista',db.createColeccionista)
app.put('/updateColeccionista/:id', db.updateColeccionista)
app.delete('/deleteColeccionista/:id',db.elimColeccionista)

//Crud  Eventos
app.get('/Eventos', db.getEvento)
app.post('/newEventos',db.createEvento)
app.put('/updateEventos/:id', db.updateEvento)
app.delete('/deleteEventos/:id',db.elimEvento)

//Crud Monedas
app.get('/monedas', db.getColeccionistas)
app.post('/newMoneda',db.createMoneda)
app.put('/updateMoneda/:id', db.updateMoneda)
app.delete('/deleteMoneda/:id',db.elimMoneda)

//CRUD  Catalogo Obras
app.get('/obras', db.getCatalogoObra)
app.post('/newObra',db.createCatalogoObra)
app.put('/updateObra/:id', db.updateCatalogoObra)
app.delete('/deleteObra/:id',db.elimCatalogoObra)

//CRUD Subastas
app.get('/subastas', db.getSubastaObjeto)
app.post('/newSubasta',db.createSubastaObjeto)
app.put('/updateSubasta/:id', db.updateSubastaObjeto)
app.delete('/deleteSubasta/:id',db.elimSubastaObjeto)

//CRUD Organizaciones
app.get('/organizaciones', db.getOrganizacion)
app.post('/newOrganizacion',db.createOrganizacion)
app.put('/updateOrganizacion/:id', db.updateOrganizacion)
app.delete('/deleteOrganizacion/:id',db.elimOrganizacion)

//CRUD Lugares
app.get('/lugares', db.getLugar)
app.post('/newLugar',db.createLugar)
app.put('/updateLugar/:id', db.updateLugar)
app.delete('/deleteLugar/:id',db.elimLugar)

//ORG EVENTO
app.post('/insOrg',db.insOrga)
app.post('/insObra',db.insObraMoneda)


app.listen(port, () => {
    console.log(`App running on localhost:${port}.`)
})