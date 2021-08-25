const express = require('express');

const app = express();

 //Routes
 //Worker routes
 app.post('/api/client/register', (req, res)=> {
    res.send('Register routes');
});


 //Server
 const PORT = process.env.PORT || 5000;
 app.listen(5000, () =>{
    console.log(`Server is runing ${PORT}`);
 })