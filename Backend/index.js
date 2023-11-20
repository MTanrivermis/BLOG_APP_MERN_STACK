"use strict"

/* ExpressJS Start */
const express = require('express'); 
const app = express() 
/* ------------------------------------------------------------------------- */

/* ENV */ // Required Modules
require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000
/* ------------------------------------------------------------------------- */

// DB Connection
require('./src/configs/dbConnection')()

/* ------------------------------------------------------------------------- */
// Home Path
app.all('/',(req,res)=> {
    res.send({
        error: false,
        message: 'Welcome to Blog App server!!'
    })
})

/* ------------------------------------------------------------------------- */





















/* ------------------------------------------------------------------------- */
// DEVELOPER SIDE PORT SYSTEM
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`))