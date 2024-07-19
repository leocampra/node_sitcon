const express = require("express");
const Tiposolicitacao = require("../controllers/Tiposolicitacao");

const router = express.Router();

router.get("", Tiposolicitacao.show);

module.exports = router;