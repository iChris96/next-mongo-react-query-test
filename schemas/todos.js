import { Schema, model } from 'mongoose';

const TodoSchema = new Schema({
  title: String,
  isCompleted: Boolean
});

export const Todos = model('Todos');