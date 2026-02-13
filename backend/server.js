require('dotenv').config();
const multer = require('multer');
const AWS = require('aws-sdk');
const ProductModel = require('./productmodel/productmodel');

// above are newly created ones
const express = require('express');
const mongoose = require('mongoose');

//import user model
const User = require('./usermodel/usermodel');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connect to MongoDB


mongoose.connect(process.env.MONGO_URI, {

}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const upload = multer({ storage: multer.memoryStorage() });

//AWS S3 configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});

async function uploadTxtToS3(file) {
    if (!file.originalname.endsWith('.txt')) {
        throw new Error('Only .txt files allowed');
    }

    const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `files/${Date.now()}-${file.originalname}`,
        Body: file.buffer,
        ContentType: 'text/plain',
        
    };

    const data = await s3.upload(params).promise();
    return data.Location; // this is the S3 URL
}


app.post('/api/product', upload.single('file'), async (req, res) => {

    try {
        const fileUrl = await uploadTxtToS3(req.file);
        const newProduct = new ProductModel({
            name: req.body.name,
            tutor: req.body.tutor,
            price: req.body.price,
            category: req.body.category,
            img: req.body.img,
            file: fileUrl,
        }
        );
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/product', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
app.delete('/api/product/:id', async (req, res) => {
   try{
    const {id} = req.params;
    await ProductModel.findByIdAndDelete(id);
    res.status(200).json({message: 'Product deleted successfully'});
   } catch (err) {
       res.status(500).json({ error: err.message });
   }
});
//API routes for crate user
app.post('/api/users', async (req, res) => {
    const { email, password } = req.body;
    try {
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//API route for get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.post('/api/purchase', async (req, res) => {
    const { userEmail, productId } = req.body;
    try {
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (user.purchasedCourses.includes(productId)) {
            return res.status(400).json({ error: 'Course already purchased' });
        }
        user.purchasedCourses.push(productId);
        await user.save();
        res.status(200).json({ message: 'Course purchased successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/purchase', async (req, res) => {
    const { userEmail } = req.query;
    try {
        const user = await User.findOne({ email: userEmail }).populate('purchasedCourses');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log(user.purchasedCourses);
        res.status(200).json(user.purchasedCourses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin login route
app.post('/api/adminlogin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await User.findOne({ email, isAdmin: true });
        if (!admin) return res.status(401).json({ error: 'Admin not found' });

        if (admin.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }

        // You can send the admin info back
        res.status(200).json({ message: 'Admin login successful', admin });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
