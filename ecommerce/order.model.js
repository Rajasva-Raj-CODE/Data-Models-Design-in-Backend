import mongoose from "mongoose"


const orderItemcSchema = new mongoose.Schema({
  prodyctID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product"
  },
  quantity:{
    type:Number,
    required:true
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice:{
    type:Number,
    required:true
  },
  customer:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User"
  },
  orderItems:{
    type:[orderItemcSchema],
    required:true
  },
  address:{
    type:String,
    required:true
  },
  status:{
    type:string,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default:"PENDING"
  }
 
},{timestamps:true})




export const Order = mongoose.model("Order",orderSchema)