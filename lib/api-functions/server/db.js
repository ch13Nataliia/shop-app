import mongoose from 'mongoose';

const {
  DB_URL = 'mongodb+srv://new-shop-admin:OLYjGAS8XO23naeZ@cluster0.hymx95e.mongodb.net/shop?retryWrites=true&w=majority',
} = process.env;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('DB Connected');
  } catch (err) {
    console.log(err);
  }
}
