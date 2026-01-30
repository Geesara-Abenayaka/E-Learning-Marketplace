const mongoose = require('mongoose');   

//product model schema      
const productModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tutor: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category:{
        type: String,
        required: true,
    }
    ,
    img:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('ProductModel', productModelSchema);