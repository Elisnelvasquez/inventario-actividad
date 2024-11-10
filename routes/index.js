const express = require('express');
const router = express.Router();

// Ruta principal '/'
router.get('/', (req, res) => {
    res.render('auth/login'); // Carga la vista auth/login.ejs
});

// Ruta /dashboard'
router.get('/dashboard', (req, res) => {
    res.render('welcome', {token: null}); //  Carga la vista welcome.ejs 
});

module.exports = router;   
   