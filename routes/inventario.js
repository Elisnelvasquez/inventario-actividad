const express = require('express');
const router = express.Router();
const InventarioController = require('../controllers/InventarioController');

// Ruta para listar todos los productos
router.get('/', InventarioController.list);
// Ruta para mostrar el formulario de crear un nuevo producto
router.get('/create', InventarioController.createForm);
// Ruta para guardar un nuevo producto
router.post('/create', InventarioController.create);
// Ruta para mostrar el formulario de edición de un producto
router.get('/edit/:id', InventarioController.editForm);
// Ruta para actualizar un producto
router.post('/edit/:id', InventarioController.edit);
// Ruta para eliminar un producto
router.post('/delete/:id', InventarioController.delete);
// Ruta para mostrar detalles de un producto
router.get('/details/:id', InventarioController.details);

module.exports = router;
