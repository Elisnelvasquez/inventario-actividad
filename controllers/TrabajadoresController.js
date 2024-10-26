const db = require("../config/database");

class TrabajadoresController {
  static index(req, res) {
    db.query("SELECT * FROM trabajadores", (err, results) => {
      if (err) throw err;
      res.render("trabajadores/index", { trabajadores: results });
    });
  }

  static create(req, res) {
    res.render("trabajadores/create");
  }

  static store(req, res) {
    const {
      nombre,
      puesto,
      salario,
      apellido,
      telefono,
      email,
      fecha_contratacion
    } = req.body;
    db.query(
      "INSERT INTO trabajadores (nombre, puesto, salario, apellido, telefono, email, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nombre, puesto, salario, apellido, telefono, email, fecha_contratacion],
      (err) => {
        if (err) throw err;
        res.redirect("/trabajadores");
      }
    );
  }

  static edit(req, res) {
    const id = req.params.id;
    db.query(
      "SELECT * FROM trabajadores WHERE id = ?",
      [id],
      (err, results) => {
        if (err) throw err;
        res.render("trabajadores/edit", { trabajador: results[0] });
      }
    );
  }

  static update(req, res) {
    const id = req.params.id;
    const {
      nombre,
      puesto,
      salario,
      apellido,
      telefono,
      email,
      fecha_contratacion
    } = req.body;
    db.query(
      "UPDATE trabajadores SET nombre = ?, puesto = ?, salario = ?, apellido = ?, telefono = ?, email = ?, fecha_contratacion = ? WHERE id = ?",
      [
        nombre,
        puesto,
        salario,
        apellido,
        telefono,
        email,
        fecha_contratacion,
        id
      ],
      (err) => {
        if (err) throw err;
        res.redirect("/trabajadores");
      }
    );
  }

  static delete(req, res) {
    const id = req.params.id;
    db.query("DELETE FROM trabajadores WHERE id = ?", [id], (err) => {
      if (err) throw err;
      res.redirect("/trabajadores");
    });
  }

  static details(req, res) {
    const id = req.params.id;
    db.query(
      "SELECT * FROM trabajadores WHERE id = ?",
      [id],
      (err, results) => {
        if (err) throw err;
        res.render("trabajadores/details", { trabajador: results[0] });
      }
    );
  }
}

module.exports = TrabajadoresController;
