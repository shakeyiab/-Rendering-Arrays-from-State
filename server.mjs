import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

// SetUps
const app = express()
dotenv.config()
let PORT = process.env.PORT || 3001

// middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));
// routes

import React, { useState } from 'react';




// listener
app.listen(PORT, ()=>{
    console.log(`Server Running on Port: ${PORT}`)
})