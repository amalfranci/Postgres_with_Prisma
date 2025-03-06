const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const authorRoutes = require("./routes/authorRoutes")


app.use(express.json())
app.use("/api",authorRoutes)

const PORT = process.env.PORT || 3010


app.listen(PORT,()=>{
    console.log(`Server is connected port:${PORT} successfully `);
    
})

