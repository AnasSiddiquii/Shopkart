const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({ //schema
    name:String,
    color:String,
    price:Number,
    brand:String,
    category:String,
    photo:String,
})

module.exports = mongoose.model('items',ProductSchema); // schema n model connection