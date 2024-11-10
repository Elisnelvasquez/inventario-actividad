const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

class AuthController {
    async register(req, res) {
        const { username, password, role } = req.body;
        
        // Verificar si el usuario ya existe
        const checkUserQuery = `SELECT * FROM users WHERE username = ?`;
        db.query(checkUserQuery, [username], (err, results) => {
            if (err) return res.status(500).send('Error en el servidor');
            
            if (results.length > 0) {
                // Usuario ya existe, renderizamos con un mensaje de error
                return res.render('auth/register', { error: 'El usuario ya existe' });
            }
            
            // Si no existe, procedemos con el registro
            const hashedPassword = bcrypt.hashSync(password, 10);
            const insertUserQuery = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;
                
            db.query(insertUserQuery, [username.toLocaleLowerCase(), hashedPassword, role], (err) => {
                if (err) return res.status(500).send('Error en el registro');
                res.redirect('/auth/login');
            });
        });
    }

    async login(req, res) {
        const { username, password } = req.body;
        const query = `SELECT * FROM users WHERE username = ?`;
    
        db.query(query, [username.toLocaleLowerCase()], (err, results) => {
            if (err || results.length === 0 || !bcrypt.compareSync(password, results[0].password)) {
                // Credenciales incorrectas
                return res.render('auth/login', { error: 'Credenciales incorrectas' });
            }
    
            const token = jwt.sign({ id: results[0].id, role: results[0].role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.render('welcome', { token }); 
        });
    }
    
}

module.exports = new AuthController();
