const express=require('express');
const mongoose=require('mongoose');

//import user model
const User=require('./usermodel/usermodel');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

//connect to MongoDB


mongoose.connect(process.env.MONGO_URI,{

}).then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));


//API routes for crate user
app.post('/api/users',async(req,res)=>{
    const {email,password}=req.body;
    try{
        const newUser=new User({email,password});
        await newUser.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({error:err.message});
    }
});

//API route for get all users
app.get('/api/users',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({error:err.message});
    }
});

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});