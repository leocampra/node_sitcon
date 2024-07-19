const express = require("express");
const Post = require("../controllers/Profissionalatende");

const router = express.Router();

router.get("/:id", Post.show);

module.exports = router;