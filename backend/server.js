require('dotenv').config()
const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.json({msg:"Welcome to Baqer"})
})

app.listen(process.env.PORT, ()=>{
    console.log("Listening for port ", process.env.PORT)
})