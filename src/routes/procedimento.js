const express = require("express");
const Procedimento = require("../controllers/Procedimento");

const router = express.Router();

router.get("", Procedimento.show);

module.exports = router;