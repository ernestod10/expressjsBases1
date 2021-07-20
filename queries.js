const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', //Aqui pongan su user
  host: 'localhost',
  database: 'Subastas', //el nombre de su BD
  password: '0809',           //y la contraseña
  port: 5432,
})

//  Coleccionistas
/* _____________________________________________________________________________________________________________*/
  //GET todos los coleccionistas
  const getColeccionistas = (request, response) => {
    pool.query('SELECT * FROM EC_Coleccionista ',  (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
  }
  //CREATE Coleccionista
 
  const createColeccionista = (request, response) => {
    const { EC_lugar_ID_Lugar, nombre, Apellido, Apellido2, fecha_Nacimiento,Nacionalidad,Telefono,Email } = request.body
    
    pool.query('INSERT INTO EC_Coleccionista ( EC_lugar_ID_Lugar, nombre, Apellido, Apellido2, fecha_Nacimiento,Nacionalidad,Telefono,Email) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [EC_lugar_ID_Lugar, nombre, Apellido, Apellido2, fecha_Nacimiento,Nacionalidad,Telefono,Email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
    }
  //UPDATE Coleccionista
  const updateColeccionista = (request, response) => {
    const id = parseInt(request.params.id)
    const {EC_lugar_ID_Lugar, nombre, Apellido, Apellido2, fecha_Nacimiento,Nacionalidad,Telefono,Email } = request.body
    
    pool.query(
      'UPDATE EC_Coleccionista set EC_lugar_ID_Lugar=$1, nombre=$2,Apellido=$3,Apellido2 =$4,fecha_Nacimiento=$5, Nacionalidad=$6 ,Telefono=$7, email=$8 WHERE EC_Coleccionista.ID_coleccionista = $9',
      [EC_lugar_ID_Lugar, nombre, Apellido, Apellido2, fecha_Nacimiento,Nacionalidad,Telefono,Email,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
    }  
  //DELETE AGENCIA
  const elimColeccionista = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM EC_Coleccionista where ID_coleccionista = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }

//Eventos
/* _____________________________________________________________________________________________________________*/
//GET Todos los eventos
const getEvento = (request, response) => {
  pool.query('SELECT * FROM EC_Evento ',  (error, results) => {
       if (error) {
        throw error
      }
     response.status(200).json(results.rows)
    }
   )
}
//CREATE evento
const createEvento = (request, response) => {
  const { Fecha_Inicio, Estatus, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras } = request.body

  pool.query(
    'INSERT INTO EC_Evento ( Fecha_Inicio,Estatus, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras  ) VALUES (Date($1),$2,$3,$4,$5,$6,$7,$8) ', 
      [ Fecha_Inicio, Estatus, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras  ],
      (error, results) => {
        if (error) {
         throw error
      }
      response.status(201).send(results.rows)
    }
  )
}

//UPDATE Eventos
const updateEvento = (request, response) => {
  const id = parseInt(request.params.id)
  const { Fecha_Inicio, Estatus, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras } = request.body
  
  pool.query(
    'UPDATE EC_Evento set Fecha_Inicio=$1,Estatus=$2,Costo_inscripcion_Clientes=$3, Costo_Inscripcion=$4, Tipo=$5 ,LocalSubasta=$6, TipoPujas=$7, DuracionHoras=$8 WHERE EC_Evento.ID_evento = $9',
    [ Fecha_Inicio, Estatus, Costo_inscripcion_Clientes, Costo_Inscripcion,Tipo, LocalSubasta, TipoPujas, DuracionHoras, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    }
  )
  }  
//DELETE Evento
   const elimEvento = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM EC_Evento where ID_evento = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
      }
    )
  }

//Monedas
/* _____________________________________________________________________________________________________________*/
//GET Todos los monedas
const getMoneda = (request, response) => {
  pool.query('SELECT * FROM EC_moneda ',  (error, results) => {
    if (error) {
    throw error
    }
  response.status(200).json(results.rows)
  }
 )
}

//CREATE Moneda
 
const createMoneda = (request, response) => {
  const { nombre, mintaje, Denominacion, Forma, Metal, Diametro, Canto, Peso, Año, 
  Acuñacion, Motivo, Anverso, Reverso, EC_lugar_ID_Lugar, Divisa_id } = request.body
  
  pool.query('INSERT INTO EC_Moneda (nombre, mintaje, Denominacion, Forma, Metal, Diametro, Canto, Peso, Año, Acuñacion, Motivo, Anverso, Reverso, EC_lugar_ID_Lugar, Divisa_id ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)',
   [nombre, mintaje, Denominacion, Forma, Metal, Diametro, Canto, Peso, Año, Acuñacion, Motivo, Anverso, Reverso, EC_lugar_ID_Lugar, Divisa_id], (error, results) => {
      if (error) {
        throw error
      }
     response.status(201).send(results.rows)
    } 
   )
  }

//UPDATE Moneda
const updateMoneda = (request, response) => {
  const id = parseInt(request.params.id)
  const {nombre, mintaje, Denominacion, Forma, Metal, Diametro, Canto, Peso, Año, Acuñacion, Motivo, Anverso, Reverso, EC_lugar_ID_Lugar, Divisa_id } = request.body
  
  pool.query(
    'UPDATE EC_Coleccionista set nombre=$1, mintaje=$2,Denominacion=$3,Forma =$4,Metal=$5, Diametro=$6 ,Canto=$7, Peso=$8, Año=$9,Acuñacion=$10,Motivo=$11,Anverso=$12,Reverso=$13,EC_lugar_ID_Lugar=$14,Divisa_id=$15  WHERE EC_moneda.ID_moneda = $16',
    [nombre, mintaje, Denominacion, Forma, Metal, Diametro, Canto, Peso, Año, Acuñacion, Motivo, Anverso, Reverso, EC_lugar_ID_Lugar, Divisa_id, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    }
  )
  }  


//DELETE Moneda
const elimMoneda = (request, response) => {
  const id = parseInt(request.params.id)
  
  pool.query('DELETE FROM EC_moneda where ID_moneda = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(results.rows)
  })
  }

//  Obras
/* _____________________________________________________________________________________________________________*/
  //GET todos las Obras
  const getCatalogoObra = (request, response) => {
    pool.query('SELECT * FROM EC_Catalogo_Obra ',  (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
  }
  //CREATE Obra
 
  const createCatalogoObra = (request, response) => {
    const { } = request.body
    
    pool.query('INSERT INTO EC_Catalogo_Obra (Nombre, Año, Movimiento, Dimensiones, EC_Coleccionista_ID_coleccionista, EC_Organizacion_ID_organiacion ) VALUES ($1,$2,$3,$4,$5,$6)', [ Nombre, Año, Movimiento, Dimensiones, EC_Coleccionista_ID_coleccionista, EC_Organizacion_ID_organiacion ], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
    }
  //UPDATE Obra
  const updateCatalogoObra = (request, response) => {
    const id = parseInt(request.params.id)
    const {Nombre, Año, Movimiento, Dimensiones, EC_Coleccionista_ID_coleccionista, EC_Organizacion_ID_organiacion } = request.body
    
    pool.query(
      'UPDATE EC_Catalogo_Obra set Nombre=$1, Año=$2,Movimiento=$3,Dimensiones =$4,EC_Coleccionista_ID_coleccionista=$5, EC_Organizacion_ID_organiacion=$6  WHERE EC_Catalogo_Obra.ID_NUR = $7',
      [Nombre, Año, Movimiento, Dimensiones, EC_Coleccionista_ID_coleccionista, EC_Organizacion_ID_organiacion,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
    }  
  //DELETE Obra
  const elimCatalogoObra = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM EC_Catalogo_Obra where NUR = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }


//  Subasta
/* _____________________________________________________________________________________________________________*/
  //GET todas las subastas
  const getSubastaObjeto = (request, response) => {
    pool.query('SELECT * FROM EC_Subasta_Objeto ',  (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
  }
  //CREATE subasta
 
  const createSubastaObjeto = (request, response) => {
    const {  } = request.body
    
    pool.query('INSERT INTO EC_Subasta_Objeto (Bid, Ask, Precio_final, Vendido, Orden, EC_Insc_Cliente_Evento_EC_Evento_ID_evento, EC_Insc_Cliente_Evento_EC_Cliente_EC_Organizcion_ID_organiacion, EC_Insc_Cliente_Evento_EC_Cliente_EC_Col_ID_col, EC_Catalogo_Obra_NUR, EC_catalogo_monedas_NUR, EC_catalogo_monedas_EC_moneda_ID_moneda, DuracionMin, RazonNoVenta) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
     [Bid, Ask, Precio_final, Vendido, Orden, EC_Insc_Cliente_Evento_EC_Evento_ID_evento, EC_Insc_Cliente_Evento_EC_Cliente_EC_Organizcion_ID_organiacion, EC_Insc_Cliente_Evento_EC_Cliente_EC_Col_ID_col, EC_Catalogo_Obra_NUR, EC_catalogo_monedas_NUR, EC_catalogo_monedas_EC_moneda_ID_moneda, DuracionMin, RazonNoVenta], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
    }
  //UPDATE subasta
  const updateSubastaObjeto = (request, response) => {
    const id = parseInt(request.params.id)
    const {Bid, Ask, Precio_final, Vendido, Orden, EC_Insc_Cliente_Evento_EC_Evento_ID_evento, EC_Insc_Cliente_Evento_EC_Cliente_EC_Organizcion_ID_organiacion, EC_Insc_Cliente_Evento_EC_Cliente_EC_Col_ID_col, EC_Catalogo_Obra_NUR, EC_catalogo_monedas_NUR, EC_catalogo_monedas_EC_moneda_ID_moneda, DuracionMin, RazonNoVenta } = request.body
    
    pool.query(
      'UPDATE EC_Subasta_Objeto set Bid=$1, Ask=$2,Precio_final=$3,Vendido =$4,Orden=$5, EC_Insc_Cliente_Evento_EC_Evento_ID_evento=$6 ,EC_Insc_Cliente_Evento_EC_Cliente_EC_Organizcion_ID_organiacion=$7, EC_Insc_Cliente_Evento_EC_Cliente_EC_Col_ID_col=$8, EC_Catalogo_Obra_NUR=$9, EC_catalogo_monedas_NUR=$10,EC_catalogo_monedas_EC_moneda_ID_moneda=$11,DuracionMin=$12,RazonNoVenta=$13   WHERE EC_Subasta_Objeto.EC_Subasta_Objeto_PK = $14',
      [Bid, Ask, Precio_final, Vendido, Orden, EC_Insc_Cliente_Evento_EC_Evento_ID_evento, EC_Insc_Cliente_Evento_EC_Cliente_EC_Organizcion_ID_organiacion, EC_Insc_Cliente_Evento_EC_Cliente_EC_Col_ID_col, EC_Catalogo_Obra_NUR, EC_catalogo_monedas_NUR, EC_catalogo_monedas_EC_moneda_ID_moneda, DuracionMin, RazonNoVenta ,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
    }  
  //DELETE subasta
  const elimSubastaObjeto = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM EC_Subasta_Objeto where EC_Subasta_Objeto_PK = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }

//  Organizacion
/* _____________________________________________________________________________________________________________*/
  //GET todos las organizaciones
  const getOrganizacion = (request, response) => {
    pool.query('SELECT * FROM EC_Organizacion ',  (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
  }
  //CREATE Organizacion
 
  const createOrganizacion = (request, response) => {
    const { EC_lugar_ID_Lugar, Nombre, Proposito, Fecha_Fundacion, Pag_web, Telefono, Tipo, Alcance, Email } = request.body
    
    pool.query('INSERT INTO EC_Organizacion (EC_lugar_ID_Lugar, Nombre, Proposito, Fecha_Fundacion, Pag_web, Telefono, Tipo, Alcance, Email ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)', 
    [EC_lugar_ID_Lugar, Nombre, Proposito, Fecha_Fundacion, Pag_web, Telefono, Tipo, Alcance, Email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
    }
  //UPDATE Organizacion
  const updateOrganizacion = (request, response) => {
    const id = parseInt(request.params.id)
    const { EC_lugar_ID_Lugar, Nombre, Proposito, Fecha_Fundacion, Pag_web, Telefono, Tipo, Alcance, Email} = request.body
    
    pool.query(
      'UPDATE EC_Organizacion set EC_lugar_ID_Lugar=$1, Nombre=$2,Proposito=$3,Fecha_Fundacion =$4,Pag_web=$5, Telefono=$6 ,Tipo=$7, Alcance=$8, Email=$9 WHERE EC_Organizacion.ID_organiacion = $10',
      [EC_lugar_ID_Lugar, Nombre, Proposito, Fecha_Fundacion, Pag_web, Telefono, Tipo, Alcance, Email,id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
    }  
  //DELETE Organizacion
  const elimOrganizacion = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.query('DELETE FROM EC_Organizacion where ID_organiacion = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }



//  Lugar
/* _____________________________________________________________________________________________________________*/
  //GET todos los Lugares
  const getLugar = (request, response) => {
    pool.query('SELECT * FROM EC_lugar ',  (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
  }
  //CREATE Lugar
 
  const createLugar = (request, response) => {
    const { Nombre_Pais, Tipo_lugar, Nacionalidad } = request.body
    
    pool.query('INSERT INTO EC_lugar (Nombre_Pais, Tipo_lugar, Nacionalidad) VALUES ($1,$2,$3)', 
    [Nombre_Pais, Tipo_lugar, Nacionalidad], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(results.rows)
    })
    }
  //UPDATE Lugar
  const updateLugar = (request, response) => {
    const id = parseInt(request.params.id)
    const {Nombre_Pais, Tipo_lugar, Nacionalidad } = request.body
    
    pool.query(
      'UPDATE EC_lugar set Nombre_Pais=$1, Tipo_lugar=$2,Nacionalidad=$3 WHERE EC_lugar.ID_Lugar = $4',
      [ Nombre_Pais, Tipo_lugar, Nacionalidad ],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      }
    )
    }  
  //DELETE Lugar
  const elimLugar = (request, response) => {
    const id = (request.params.id)
    
    pool.query('DELETE FROM EC_lugar where ID_Lugar = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }

//insert organizadores evento
    const insOrga = (request, response) => {
      const {id} = request.body
      
      pool.query('insert into ec_evento_organizador (ec_organizacion_id_organizacion, ec_evento_id_evento) VALUES ($1, (select last_value from ec_evento_id_evento_seq ))', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(results.rows)
      })
      }
  //Insertar obrasy monedas
  const insObraMoneda = (request, response) => {
    const {ask,nur, duracion} = request.body
    
    pool.query('insert into ec_subasta_objeto (bid, ask, precio_final, vendido, timeinicio, ec_catalogo_obra_nur, ec_catalogo_monedas_nur, duracionmin, razonnoventa) values (1, $2,null,false,null,(select nur from ec_catalogo_obra where nur= $3),(select nur from ec_catalogo_monedas where nur=$3),4$,null)', [ask,nur, duracion], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(results.rows)
    })
    }



module.exports={
  //coleccionistas 
  getColeccionistas,
  createColeccionista,
  updateColeccionista,
  elimColeccionista,
  //eventos
  getEvento,
  createEvento,
  updateEvento,
  elimEvento,
  //monedas
  getMoneda,
  createMoneda,
  updateMoneda,
  elimMoneda,
  // obras
  getCatalogoObra,
  createCatalogoObra,
  updateCatalogoObra,
  elimCatalogoObra,
  // subasta
  getSubastaObjeto,
  createSubastaObjeto,
  updateSubastaObjeto,
  elimSubastaObjeto,
  //Organizacion
  getOrganizacion,
  createOrganizacion,
  updateOrganizacion,
  elimOrganizacion,
  //Lugar
  getLugar,
  createLugar,
  updateLugar,
  elimLugar,
  //evento insert org
  insOrga,
  insObraMoneda


}