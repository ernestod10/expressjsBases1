const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Demo_Ambiente',
  password: '0809',
  port: 5432,
})
//PRODUCTOS
    const getProductos = (request, response) => {
        pool.query('SELECT * FROM Producto ORDER BY id_producto ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
        })
    }
    const geProductoId = (request, response) => {
        const id = parseInt(request.params.id)
      
        pool.query('SELECT * FROM Producto WHERE id_producto = $1', [id], (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }
    const createProducto = (request, response) => {
    const { nombre, precio } = request.body
      
        pool.query('INSERT INTO producto (nombre_producto, Precio_unitario) VALUES ($1, $2)', [nombre, precio], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`Producto añadido con ID: ${result.insertId}`)
        })
      }
module.exports={
    getProductos,
    geProductoId,
    createProducto,

}