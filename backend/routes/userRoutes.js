const express = require('express');
const  router = express.Router();
const user = require('../model/user');


router.use(express.json());


//signup
router.post('/post',async(req,res)=>{
    try {
        const data = req.body;
        await user(data).save();
        res.status(200).json({message:"Register successfully"})

    } catch (error) {
        console.log(error);
        res.status(400).json({message:"unable to register"})

    }

})
//login
router.post('/login',async(req,res)=>{
    let u = req.body.username;
    let p = req.body.password;
    console.log(u);
    console.log(p)
    const person = await user.findOne({username:u})
    if (!person){
        res.json({message:"user not found"});
    }
    try {
        if(person.password==p){
            res.status(200).json({message:"successfully loged in",person})
        }else{
            res.json({message:"login failed"})
        }
    } catch (error) {
      console.log(error)  
    }
})

    router.get('/my/:id',async(req,res)=>{
        console.log("data")
        console.log(req.params.id);
        let userId =req.params.id;
        try {
            const item =await user.find({_id:userId})
            console.log(item)
            res.status(200).json(item)
        } catch (error) {
            console.log(error)
        }
    })










module.exports=router;