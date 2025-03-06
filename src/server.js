const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const authorRoutes = require("./routes/authorRoutes")
const bookRoutes = require("./routes/bookRoutes")


app.use(express.json())
app.use("/api/author",authorRoutes)
app.use("/api/book",bookRoutes)

const PORT = process.env.PORT || 3010


app.listen(PORT,()=>{
    console.log(`Server is connected port:${PORT} successfully `);
    
})

