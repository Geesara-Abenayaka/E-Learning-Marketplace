const mongoose = require('mongoose');
//user schema
const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false, // default is regular user
    },
    purchasedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductModel',
            default: undefined // optional, can leave empty
        }
    ]


});
module.exports = mongoose.model('User', userSchema);