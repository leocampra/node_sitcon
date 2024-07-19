const express = require("express");
const Paciente = require("../controllers/Paciente");

const router = express.Router();

router.get("/:id", Paciente.show);

module.exports = router;