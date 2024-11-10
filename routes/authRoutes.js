const express = require('express');
const AuthController = require('../controllers/authController')
const router = express.Router();


router.post('/register', AuthController.register);
// Ruta para cargar la interfaz de registro
router.get('/register', (req, res) => res.render('auth/register'));


router.post('/login', AuthController.login);
// Ruta para cargar la interfaz de inicio de sesion
router.get('/login', (req, res) => res.render('auth/login'));



module.exports = router;
