import connectDB from "/middleware/mongodb";
import { Todos } from "/schemas/todos.js"

const getTodos = async (req, res) => {
  const todos = await Todos.find()
  console.log({ todos })
  return res.status(200).json({ todos })
}

const addTodo = async (req, res) => {
  const { title, isCompleted } = req.body;
  const result = await Todos.create({ title, isCompleted })
  console.log({ result })
  return res.status(200).json({ status: 'ok' })
}

const uptateTodo = async (req, res) => {
  const { todo } = req.body;
  const currentTodo = await Todos.findOneAndUpdate({ _id: todo._id }, { title: todo.title, isCompleted: todo.isCompleted });
  const updatedTodo = await Todos.findOne({ _id: todo._id });
  console.log({ currentTodo, updatedTodo })
  return res.status(200).json({ status: 'ok', message: 'TODO updated', updatedTodo })
}

const handleTodos = async (req, res) => {
  const method = req.method;

  try {
    if (method == 'GET') return getTodos(req, res)
    if (method == 'POST') return addTodo(req, res)
    if (method == 'PUT') return uptateTodo(req, res)
  } catch (error) {
    console.error('Server Error: ', error)
    return res.status(500)
  }



  return res.status(404).json('No Found')
}


export default connectDB(handleTodos);