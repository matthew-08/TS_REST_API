import mongoose from 'mongoose';
import { string } from 'zod';

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

const silence = new Kitten({ name: 'cat' });
