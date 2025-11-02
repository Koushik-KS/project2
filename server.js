const express=require("express");

const contacts=require('./routes/contactRoutes');

const connectDB=require('./config/db');

const app=express();

app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send({message:'Contact Manager API is running'});
});

app.use('/contacts',contacts);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});