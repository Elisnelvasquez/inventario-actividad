const db = require('../config/database');

class InventarioController {
    static list(req, res) {
        db.query('SELECT * FROM inventario', (err, results) => {
            if (err) throw err;
            res.render('inventario/index', { productos: results });
        });
    }

    static createForm(req, res) {
        res.render('inventario/create');
    }

    static create(req, res) {
        const { nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras } = req.body;
        const query = 'INSERT INTO inventario (nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, [nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras], (err) => {
            if (err) throw err;
            res.redirect('/inventario');
        });
    }

    static editForm(req, res) {
        const id = req.params.id;
        db.query('SELECT * FROM inventario WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            res.render('inventario/edit', { producto: results[0] });
        });
    }

    static edit(req, res) {
        const id = req.params.id;
        const { nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras } = req.body;
        const query = 'UPDATE inventario SET nombre = ?, descripcion = ?, categoria = ?, precio = ?, cantidad = ?, proveedor = ?, fecha_ingreso = ?, codigo_barras = ? WHERE id = ?';
        db.query(query, [nombre, descripcion, categoria, precio, cantidad, proveedor, fecha_ingreso, codigo_barras, id], (err) => {
            if (err) throw err;
            res.redirect('/inventario');
        });
    }

    static delete(req, res) {
        const id = req.params.id;
        db.query('DELETE FROM inventario WHERE id = ?', [id], (err) => {
            if (err) throw err;
            res.redirect('/inventario');
        });
    }

    static details(req, res) {
        const id = req.params.id;
        db.query('SELECT * FROM inventario WHERE id = ?', [id], (err, results) => {
            if (err) throw err;
            res.render('inventario/details', { producto: results[0] });
        });
    }
}

module.exports = InventarioController;
