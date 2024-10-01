import mongoose, { Mongoose } from 'mongoose';

const categorySchema = new Mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  { Timestamp: true }
);

export const Category = mongoose.model('Category', categorySchema);
