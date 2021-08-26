const express = require('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const userRoutes = require('../routes/user.routes');
require ('dotenv').config({path : './config/.env'})
require('./config/db');
const app = express();

app.use(express.json());
app.use(cors.json());

 //Routes
 app.post('/api/client', userRoutes);


 //Server
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () =>{
    console.log(`Server is runing ${PORT}`);
 })