import { Schema, model, models} from 'mongoose';

const TodoSchema = new Schema({
  title: String,
  isCompleted: Boolean
});

export const Todos = models.Todos || model('Todos', TodoSchema);

