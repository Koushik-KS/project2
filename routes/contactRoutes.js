const express = require('express');



const router = express.Router();

const Contact = require('../models/contactModels');


//all contacts
router.get('/',async(req,res)=>{
try{
    const contacts=await Contact.find({});
    res.json(contacts);

}catch(error){
    console.log(error);
    
}

});

//single contact
router.get('/:id',async(req,res)=>{
    try{
        const contact=await Contact.findById(req.params.id);
        res.json(contact);

}catch(error){
    console.log(error);
    
}
    
});


//update contact
router.put('/:id',async(req,res)=>{
     console.log(req.body);


    
    try{

        const contact=await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true});

        res.json(contact);

    } catch (error){
        console.log(error);

    }
});

//create contact
router.post('/',async(req,res)=>{
    console.log(req.body);


    const {name,email,phone,address}=req.body;
    try{

        const contact=await Contact.create({name,email,phone,address});

        res.json(contact);

    } catch (error){
        console.log(error);

    }
    
});

//delete contact
router.delete('/:id',async(req,res)=>{
    try{

        const contact=await Contact.findByIdAndDelete(req.params.id);

        res.json(contact);

    } catch (error){
        console.log(error);

    }
    res.json({message:'this is for deleting contacts'});
});


module.exports = router;