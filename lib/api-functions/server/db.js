import mongoose from 'mongoose';

const { DB_URL = 'mongodb+srv://Nataliia:Snejok-23@cluster0.hymx95e.mongodb.net/shop' } = process.env;

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log('DB Connected');
  } catch (err) {
    console.log(err);
  }
}
