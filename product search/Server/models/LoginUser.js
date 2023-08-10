let {Schema,model} = require("mongoose");

let userlogin = new Schema({
    name:{type:String},
    businessname:{type:String},
    location:{type:String},
    phonenumber:{type:Number},
    email:{unique:true,type:String},
    password:{type:String}
})
module.exports = model("userlogin",userlogin);