const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemname :{type: String, required: true},
    price:{type:Number, required:true},
    purchasedate:{type:Date, default:Date.now},
    downloadlink:[],
    purchased:{type:Boolean, default:false}

     


})
const Item = mongoose.model("Item", itemSchema);
  
  module.exports = Item;

