const express = require('express');
const router = express.Router();

// Ruta principal (home)
router.get('/', (req, res) => {
    res.render('welcome'); // Carga la vista welcome.ejs
});

module.exports = router;
  