require('dotenv').config({path:'../config/.env'});
const mongoose = require("mongoose");

const ConnectDB = async () =>{
    
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false

        });
        console.log('Connected to MongoDB');
    } catch(err){
        console.error('Failed to connect to MongoDB',err)
        

    }
};
module.exports=ConnectDB;