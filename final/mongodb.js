const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginDB")
.then(()=>{
    console.log('mongoDB connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const users =new mongoose.model('users',logInSchema)

module.exports=users