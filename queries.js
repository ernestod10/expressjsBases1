const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', //Aqui pongan su user
  host: 'localhost',
  database: 'Bases1', //el nombre de su BD
  password: '0809',           //y la contraseña
  port: 5432,
})
//SOCIOS
/* _____________________________________________________________________________________________________________*/
    //GET todas las agencias
    const getAgencias = (request, response) => {
      pool.query('SELECT * FROM agencia ORDER BY id_agencia ASC', (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).json(results.rows)
      })
  }
  //GET 1 producto por ID
  const getAgenciaId = (request, response) => {
      const id = parseInt(request.params.id)
    
      pool.query('SELECT * FROM agencia WHERE id_agencia = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
  //CREATE 1 Agencia (Si no hay agencia asociada se pone como null)
  const createAgencia = (request, response) => {
      const { nombre_agencia, tipo_operacion, alcance, descripcion, pagina, agencia_asociada} = request.body
    
      pool.query('INSERT INTO agencia (nombre_agencia, tipo_de_operacion,alcance,descripcion,pagina_web,agencia_id_agencia) VALUES ($1, $2,$3,$4,$5,$6)', [nombre_agencia, tipo_operacion, alcance, descripcion, pagina, agencia_asociada], (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(results.rows);
      })
    }
  //UPDATE cambia 1 agencia por ID
  const updateAgencia = (request, response) => {
    const id_agencia = parseInt(request.params.id);
    const { nombre_agencia, tipo_operacion, alcance, descripcion, pagina, agencia_asociada } = request.body
  
    pool.query(
      'UPDATE producto SET nombre_agencia = $1, tipo_de_operacion = $2,alcance = $3,descripcion =$4 ,pagina_web=$5,agencia_id_agencia =$6 WHERE id_producto = $7',
      [nombre_agencia, tipo_operacion, alcance, descripcion, pagina, agencia_asociada, id_agencia],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
  }
  //ELIMINA 1 agencia con ID
  const elimAgencia = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query(' DELETE FROM agencia WHERE id_agencia = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
  }
//REGISTRO CLIENTES
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
//EXPEDIENTE VIAJEROS
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
  //SOCIOS
  getAgencias,
  getAgenciaId,
  createAgencia,
  updateAgencia,
  elimAgencia,
  //CLIENTES
  getPaises,
  getPaisId,
  createPais,
  updatePais,
  elimPais,
  //VIAJEROS
  getImport,
  getImportId,
  createImportado,
  updateImportado,
  elimImportado,

}