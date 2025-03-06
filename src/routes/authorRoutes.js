const express = require("express");
const { addAuthor } = require("../controller/authorController");

const router = express.Router();

router.post("/add-author", addAuthor);

module.exports = router;
