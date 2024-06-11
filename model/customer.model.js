const mongoose=require("mongoose")
const customerSchema=new mongoose.Schema({
name:{
    type:String,
    required:true
},
birthDay:{
    type:Date,
    required:true
},
address:{
    type:String
},
dateCreated:{
    type:String,
    required:true
},
phoneNumbers:{
    type:String,
    required:true
},
citizenId:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
score:{
    type:Number,
    default:0
},
status:{
 type:String,
 default:"active"
},
delete:{
    type:String,
    default:"false"
},
});
const customer=mongoose.model("customer",customerSchema,"customers");
module.exports=customer;

