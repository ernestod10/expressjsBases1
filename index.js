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
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

//Crud Agencias
app.get('/agencias', db.getAgencias)
app.get('/agenciasSocios/:id',db.getAgenciasSocias)
app.get('/agencias/:id', db.getAgenciaId)
app.post('/asociarAgencia/:id',db.asociarseAgencia)
app.delete('/desasociarAgencia/:id',db.desasociarseAgencia)
app.post('/newAgencia',db.createAgencia)
app.put('/updateAgencia/:id', db.updateAgencia)
app.delete('/deleteAgencia/:id',db.elimAgencia)
//Crud Proveedores
app.get('/proveedores', db.getProveedores)
app.get('/proveedoresSocios/:id',db.getProveedorId)
app.get('/proveedor/:id', db.getProveedoresAsociados)
app.post('/asociarProveedor/:id',db.asociarseProveedor)
app.delete('/desasociarProveedor/:id',db.desasociarseProveedor)
app.post('/newProveedor',db.createProveedor)
app.put('/updateProveedor/:id', db.updateProveedor)
app.delete('/deleteProveedor/:id',db.elimProveedor)
//Crud Clientes
app.get('/clientes/:id', db.getClientes)
app.get('/cliente/:id',db.getClienteId)
app.post('/registroCliente/:id',db.registrarCliente)
app.delete('/eliminarRegistro/:id',db.elimRegCliente)
app.post('/newCliente',db.createCliente)
app.put('/updateCliente/:id', db.updateCliente)
app.delete('/deleteCliente/:id',db.elimCliente)
//Crud Viajeros
app.get('/viajeros/:id', db.getViajeros)
app.get('/viajero/:id',db.getViajerosId)
app.post('/registroViajeros/:id',db.registrarViajero)
app.delete('/eliminarRegistroV/:id',db.elimRegViajero)
app.post('/newViajero',db.createViajero)
app.put('/updateViajero/:id', db.updateViajero)
app.delete('/deleteViajero/:id',db.elimViajero)


//Crud Paquetes
app.get('/paquetes', db.getPaquetes)
app.get('/paquete/:id',db.getPaqueteID)
app.get('/ciudades',db.getCiudades)
app.get('/atraccionesPaquete/:id',db.getAtracciones)

app.post('/nuevoPaquete',db.createPaquete)

app.post('/nuevoCalendario',db.agregarCalendario)
app.get('/calendario/:id',db.getCalendario)
app.delete('/eliminarCalendario/:id',db.elimCalendarioPaquete)

app.post('/nuevoItinerario',db.agregarItinerarioPaquete)
app.put('/editItinerario',db.editarItinerarioPaquete)
app.delete('/eliminarItinerario/:id',db.elimItinerarioPaquete)

app.post('/agregarAtraccion',db.agregarAtraccionPaquete)
app.put('/editarAtraccion',db.agregarAtraccionPaquete)
app.delete('/eliminarAtraccion/:id',db.elimAtraccionPaquete)

app.delete('/eliminarRegistroV/:id',db.elimRegViajero)
app.post('/newViajero',db.createViajero)
app.put('/updatePaquete/:id', db.updatePaquete)
app.put('/updatePrecio/:id',db.updatePrePaquete)
app.delete('/deleteViajero/:id',db.elimViajero)


//compra Paquete
app.get('/paquetesCompra',db.getPaquetesCliente)
app.post('/pago/:id',db.pago)
app.post('/recibo:id',db.recibo)



app.listen(port, () => {
    console.log(`App running on localhost:${port}.`)
})