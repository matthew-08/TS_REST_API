import mongoose from 'mongoose';
import config from 'config';

async function connect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('connected to db');
  } catch (error) {
    console.log(error);
    process.exit;
  }
}

export default connect;
