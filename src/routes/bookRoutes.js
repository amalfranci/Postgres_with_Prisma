const express = require('express')
const bookController = require('../controller/bookController')

const router = express.Router()

router.post("/create-book",bookController.addBook)
router.get("/get-all-book",bookController.getAllBook)
router.get("/get-book/:id",bookController.getBookById)
router.put("/update-book/:id",bookController.updateBook)
router.delete("/delete-product/:id",bookController.deleteBook)


module.exports = router
