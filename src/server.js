const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3010


app.listen(PORT,()=>{
    console.log(`Server is connected port:${PORT} successfully `);
    
})

