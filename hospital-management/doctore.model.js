import mongoose from "mongoose"



const doctorRecordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  qualifcayion: {
    type: String,
    required: true,
  },
  experienceInYear: {
    type: Number,
    default: 0,
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"HospitalRecord"
    },
  ],
},{timestamps:true})

export const DoctoeRecord = mongoose.model("DoctoeRecord",doctorRecordSchema)