const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexión a la base de datos
require('./config/database');

// Importar las rutas
const indexRoutes = require('./routes/index');
const inventarioRoutes = require('./routes/inventario');
const trabajadoresRoutes = require('./routes/trabajadores');

// Usar las rutas
app.use('/', indexRoutes); // Ruta principal (home)
app.use('/inventario', inventarioRoutes); // Ruta para inventario
app.use('/trabajadores', trabajadoresRoutes); // Ruta para trabajadores

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
