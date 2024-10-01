import mongoose from 'mongoose';

const patientRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonseWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['M', 'F', 'O'],
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HospitalRecord',
    },
  },
  { timestamps: true }
);

export const PatientRecord = mongoose.model(
  'PatientRecord',
  patientRecordSchema
);
