const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type:String, required
    },
    email: {
        type:String, required
    },pasword: {
        type:String, required
    },
    pic:{
        
    }
},{
    timestamps: true
})

const UserModel = 