const express = require('express');
const router = express.Router();
const peliculaController= require('../controllers/pelicula')
//Create,Read,Update,Delete  (CRUD)  Altas Bajas Cambios Consultas

//Servicio para procesar los datos del formulario
router.post('/altaPelicula', peliculaController.postAltaPelicula);
//Servicio para consultar todos los datos
router.get('/consultaPelicula',peliculaController.getPeliculas);


module.exports = router