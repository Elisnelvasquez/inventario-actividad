const express = require('express');
const router = express.Router();
const TrabajadoresController = require('../controllers/TrabajadoresController');
const { authenticate, authorize } = require("../middleware/authMiddleware");

// Rutas protegidas con autenticación
router.get("/", TrabajadoresController.index);
router.get("/create", TrabajadoresController.create);
router.post(
  "/create",
  authenticate,
  authorize(["admin", "editor"]),
  TrabajadoresController.store
);
router.get("/edit/:id", TrabajadoresController.edit);
router.post(
  "/edit/:id",
  authenticate,
  authorize(["admin", "editor"]),
  TrabajadoresController.update
);
router.post(
  "/delete/:id",
  authenticate,
  authorize(["admin"]),
  TrabajadoresController.delete
);
router.get('/details/:id', TrabajadoresController.details);

module.exports = router;
