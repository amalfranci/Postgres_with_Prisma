const express = require('express')
const bookController = require('../controller/bookController')

const router = express.Router()

router.post("/create-book",bookController.addBook)
router.get("/get-all-book",bookController.getAllBook)


module.exports = router
