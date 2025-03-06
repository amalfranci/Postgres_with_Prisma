const express = require("express");
const { addAuthor, deleteAuthor } = require("../controller/authorController");

const router = express.Router();

router.post("/add-author", addAuthor);
router.delete("/delete-author/:id",deleteAuthor)

module.exports = router;
