const express = require('express');
const router = express.Router();
const TrabajadoresController = require('../controllers/TrabajadoresController');

// Ruta para listar todos los trabajadores
router.get('/', TrabajadoresController.index);

// Ruta para mostrar el formulario de crear un nuevo trabajador
router.get('/create', TrabajadoresController.create);

// Ruta para guardar un nuevo trabajador
router.post('/create', TrabajadoresController.store);

// Ruta para mostrar el formulario de edición de un trabajador
router.get('/edit/:id', TrabajadoresController.edit);

// Ruta para actualizar un trabajador existente
router.post('/edit/:id', TrabajadoresController.update);

// Ruta para eliminar un trabajador
router.post('/delete/:id', TrabajadoresController.delete);

// Ruta para mostrar detalles de un trabajador
router.get('/details/:id', TrabajadoresController.details);

module.exports = router;
