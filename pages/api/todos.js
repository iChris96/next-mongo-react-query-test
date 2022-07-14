import {Todos} from "/schemas/todos.js"
import connectDB from "/middleware/mongodb";

const getTodos = async (req, res) => {
  const todos = await Todos.find()
  return res.status(200).json({ todos })
}

const handleTodos =  async (req,res) => {
  const method = req.method;

  if(method == 'GET'){
    return getTodos(req,res)
  }

  if(method == 'POST'){
    const { title, isCompleted} = req.body;
    const result = await Todos.create({ title, isCompleted})
    console.log({result})
    return res.status(200).json({ status: 'ok' })
    
  }
  
  return res.status(404).json('No Found') 
}


export default connectDB(handleTodos);