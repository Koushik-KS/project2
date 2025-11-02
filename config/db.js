const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        const connection=await mongoose.connect('mongodb+srv://contactmangeruser:XswwKkk462iOAv7C@contact-manger-cluster.tvnmi8d.mongodb.net/contactmanger-api?appName=contact-manger-cluster');


    console.log(`MongoDB connected ${connection.connection.host}`); 

    }catch(error){
        console.error('Error');
        process.exit(1);
    }
};

module.exports=connectDB;