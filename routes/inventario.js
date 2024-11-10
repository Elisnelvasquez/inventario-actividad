const express = require('express');
const router = express.Router();
const InventarioController = require('../controllers/InventarioController');
const { authenticate, authorize } = require("../middleware/authMiddleware");

// Rutas protegidas con autenticación
router.get("/", InventarioController.list);
router.get("/create", InventarioController.createForm);
router.post(
  "/create",
  authenticate,
  authorize(["admin", "editor"]),
  InventarioController.create
);
router.get("/edit/:id", InventarioController.editForm);
router.post(
  "/edit/:id",
  authenticate,
  authorize(["admin", "editor"]),
  InventarioController.edit
);
router.post(
  "/delete/:id",
  authenticate,
  authorize(["admin"]),
  InventarioController.delete
);
router.get("/details/:id", InventarioController.details);

module.exports = router;
