const express = require("express");
const Solicitacao = require("../controllers/Solicitacao");

const router = express.Router();

router.post("", Solicitacao.store);
router.get("", Solicitacao.show);
module.exports = router;