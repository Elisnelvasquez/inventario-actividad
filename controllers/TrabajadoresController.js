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
    const query = `
        INSERT INTO trabajadores (nombre, puesto, salario, apellido, telefono, email, fecha_contratacion) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [nombre, puesto, salario, apellido, telefono, email, fecha_contratacion],
      (err) => {
        if (err) {
          console.log(err.message);
          return res
            .status(500)
            .json({ message: "Error al agregar el trabajador" });
        }
        res.status(200).json({ message: "Trabajador agregado exitosamente" });
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
      email
    } = req.body;

    const query = `
        UPDATE trabajadores 
        SET nombre = ?, puesto = ?, salario = ?, apellido = ?, telefono = ?, email = ?
        WHERE id = ?
    `;

    db.query(
      query,
      [nombre, puesto, salario, apellido, telefono, email, id],
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error al actualizar el trabajador" });
        }
        res
          .status(200)
          .json({ message: "Trabajador actualizado exitosamente" });
      }
    );
  }

  static delete(req, res) {
    const id = req.params.id;
    db.query("DELETE FROM trabajadores WHERE id = ?", [id], (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error al eliminar el trabajador" });
      }
      res.status(200).json({ message: "Trabajador eliminado exitosamente" });
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
