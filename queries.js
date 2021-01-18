const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', //Aqui pongan su user
  host: 'localhost',
  database: 'Demo_Ambiente', //el nombre de su BD
  password: '0809',           //y la contraseña
  port: 5432,
})
//PRODUCTOS
/* _____________________________________________________________________________________________________________*/
    //GET todos los productos
    const getProductos = (request, response) => {
      pool.query('SELECT * FROM Producto ORDER BY id_producto ASC', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
      })
  }
  //GET 1 producto por ID
  const getProductoId = (request, response) => {
      const id = parseInt(request.params.id)
    
      pool.query('SELECT * FROM Producto WHERE id_producto = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
  //CREATE 1 producto
  const createProducto = (request, response) => {
      const { nombre_producto, precio_unitario } = request.body
    
      pool.query('INSERT INTO producto (nombre_producto, Precio_unitario) VALUES ($1, $2)', [nombre_producto, precio_unitario], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(results.rows);
      })
    }
  //UPDATE cambia 1 producto por ID
  const updateProducto = (request, response) => {
    const id_producto = parseInt(request.params.id);
    const { nombre_producto, precio_unitario } = request.body
  
    pool.query(
      'UPDATE producto SET nombre_producto = $1, Precio_unitario = $2 WHERE id_producto = $3',
      [nombre_producto, precio_unitario, id_producto],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
  }
  //ELIMINA 1 producto con ID
  const elimProducto = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(' DELETE FROM producto WHERE id_producto = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
  }
//PAISES
/* _____________________________________________________________________________________________________________*/
//GET todos los Paises
const getPaises = (request, response) => {
pool.query('SELECT * FROM pais ORDER BY id_pais ASC', (error, results) => {
if (error) {
    throw error
}
response.status(200).json(results.rows)
})
}
//GET 1 Pais por ID
const getPaisId = (request, response) => {
const id_pais = parseInt(request.params.id)

pool.query('SELECT * FROM pais WHERE id_pais = $1', [id_pais], (error, results) => {
  if (error) {
    throw error
  }
  response.status(200).json(results.rows)
})
}
//CREATE 1 producto
const createPais = (request, response) => {
const { nombre_pais } = request.body

pool.query('insert into pais (nombre_pais) values ($1)', [nombre_pais], (error, results) => {
  if (error) {
    throw error
  }
  response.status(201).send(results.rows)
})
}
//UPDATE cambia 1 Pais por ID
const updatePais = (request, response) => {
const id_pais = parseInt(request.params.id)
const { nombre_pais } = request.body

pool.query(
  'UPDATE pais SET nombre_pais = $1 WHERE id_pais = $2',
  [nombre_pais, id_pais],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  }
)
}
//ELIMINA 1 Pais con ID
const elimPais = (request, response) => {
const id_pais = parseInt(request.params.id)

pool.query(' DELETE FROM pais WHERE id_pais = $1', [id_pais], (error, results) => {
  if (error) {
    throw error
  }
  response.status(200).send(results.rows)
})
}
//IMPORTACIONES
/* _____________________________________________________________________________________________________________*/
//GET todas las importaciones
const getImport = (request, response) => {
pool.query('SELECT * FROM importado ORDER BY id_importacion ASC', (error, results) => {
if (error) {
    throw error
}
response.status(200).json(results.rows)
})
}
//GET 1 importado por ID
const getImportId = (request, response) => {
const id_importado = parseInt(request.params.id)

pool.query('SELECT * FROM importado WHERE id_importacion = $1', [id_importado], (error, results) => {
  if (error) {
    throw error
  }
  response.status(200).json(results.rows)
})
}
//CREATE 1 importado
const createImportado = (request, response) => {
const { cantidad,fecha,pais_id_pais,producto_id_producto } = request.body

pool.query('insert into Importado (cantidad, fecha, pais_id_pais, producto_id_producto) values ($1,$2,$3,$4)', [cantidad,fecha,pais_id_pais,producto_id_producto], (error, results) => {
  if (error) {
    throw error
  }
  response.status(201).send(results.rows)
})
}
//UPDATE cambia 1 Pais por ID
const updateImportado = (request, response) => {
const id = parseInt(request.params.id)
const { cantidad } = request.body

pool.query(
  'UPDATE importado SET cantidad = $1 WHERE id = $2',
  [cantidad, id],
  (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`importado modificado ID: ${id}`)
  }
)
}
//ELIMINA 1 importado con ID
const elimImportado = (request, response) => {
const id = parseInt(request.params.id)

pool.query(' DELETE FROM importado WHERE id_importacion = $1', [id], (error, results) => {
  if (error) {
    throw error
  }
  response.status(200).send(results.rows)
})
}
module.exports={
  getProductos,
  getProductoId,
  createProducto,
  updateProducto,
  elimProducto,

  getPaises,
  getPaisId,
  createPais,
  updatePais,
  elimPais,

  getImport,
  getImportId,
  createImportado,
  updateImportado,
  elimImportado,

}