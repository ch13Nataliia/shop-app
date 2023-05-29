import mongoose from 'mongoose';
import db from '@/lib/api-functions/server/db';
const { Schema } = mongoose;

export const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  favourites: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
});
const Product = mongoose?.models?.Product || mongoose.model("Product", productSchema);

export default Product;