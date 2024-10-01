import mongoose from 'mongoose';

const hospitalRecordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    specilaixedIn: [{ type: String }],
  },
  { timestamps: true }
);

export const HospitalRecord = mongoose.model(
  'HospitalRecord',
  hospitalRecordSchema
);
