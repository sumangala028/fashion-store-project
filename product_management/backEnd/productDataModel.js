const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productData = new Schema({
    Category : {
        type:String,
        required : true,
    },
    Name : {
        type:String,
        required : true,
        trim : true
    },
    Price : {
        type : Number,
        required : true
    },
    Discount : {
        type :String,
        required : true
    },
    createdTime : {
        type : Date,
        default : Date.now()
    }
})

var Info = mongoose.model('Info', productData);
module.exports = Info;