const mongoose =reuire('mongoose');
const clientSchema = new mongoose.SChema({
    firstName:{
        type:String,
        required:true,
        trim:true,

    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
    },
    adress:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }

})
const client = mongoose.model("client",clientSchema)
module.exports = client;