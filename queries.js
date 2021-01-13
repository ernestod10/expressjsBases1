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
    const geProductoId = (request, response) => {
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
        const { nombre, Precio_unitario } = request.body
      
        pool.query('INSERT INTO producto (nombre_producto, Precio_unitario) VALUES ($1, $2)', [nombre, Precio_unitario], (error, results) => {
          if (error) {
            throw error
          }
          response.status(201).send(`Producto añadido con ID: ${result.insertId}`)
        })
      }
    //UPDATE cambia 1 producto por ID
    const updateProducto = (request, response) => {
      const id = parseInt(request.params.id)
      const { nombre, Precio_unitario } = request.body
    
      pool.query(
        'UPDATE producto SET nombre = $1, Precio_unitario = $2 WHERE id = $3',
        [nombre, Precio_unitario, id],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`Producto modificado ID: ${id}`)
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
        response.status(200).send(`Producto eliminado ID: ${id}`)
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
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM pais WHERE id_pais = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//CREATE 1 producto
const createPais = (request, response) => {
  const { nombre } = request.body

  pool.query('INSERT INTO pais (nombre_pais) VALUES ($1)', [nombre], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Pais añadido con ID: ${result.insertId}`)
  })
}
//UPDATE cambia 1 Pais por ID
const updatePais = (request, response) => {
  const id = parseInt(request.params.id)
  const { nombre } = request.body

  pool.query(
    'UPDATE pais SET nombre = $1 WHERE id = $2',
    [nombre, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Pais modificado ID: ${id}`)
    }
  )
}
//ELIMINA 1 Pais con ID
const elimPais = (request, response) => {
const id = parseInt(request.params.id)

  pool.query(' DELETE FROM pais WHERE id_pais = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Producto eliminado ID: ${id}`)
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
//GET 1 Pais por ID
const getImportId = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM importado WHERE id_importacion = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
//CREATE 1 producto
const createImportado = (request, response) => {
  const { cant,fecha,id_pais,id_producto } = request.body

  pool.query('insert into Importado (cantidad, fecha, pais_id_pais, producto_id_producto) values ($1,$2,$3,$4)', [cant,fecha,id_pais,id_producto], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`importado añadido con ID: ${result.insertId}`)
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
    response.status(200).send(`Importe eliminado ID: ${id}`)
  })
}
module.exports={
    getProductos,
    geProductoId,
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