const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', //Aqui pongan su user
  host: 'localhost',
  database: 'Bases1', //el nombre de su BD
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






module.exports={
  //coleccionistas 
  getColeccionistas,
  createColeccionista,
  updateColeccionista,
  elimColeccionista,



}