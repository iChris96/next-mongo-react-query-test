import { useEffect, useRef, useState } from 'react'
import { COLORS } from '/const'
import styles from '/styles/Todo.module.css'
import Button from '/components/Button'

const Todo = (props) => {
    const [todo, setTodo] = useState(props.todo)

    const handleToggleTodo = async () => {
        console.log({ todo })
        const response = await fetch('/api/todos', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ todo: { ...todo, isCompleted: !todo.isCompleted } })
        })

        const { updatedTodo } = await response.json()


        console.log({ updatedTodo })
        setTodo(updatedTodo)
    }

    const todoConfig = {
        backgroundColor: todo.isCompleted ? COLORS.DONE : COLORS.TODO,
        text: todo.isCompleted ? 'DONE' : 'TO DO'
    }

    return <li key={todo._id} className={styles.todoContainer}>
        <div className={styles.todoTitle}>{todo.title}</div>
        <div className={styles.todoCompleted}>{
            <Button
                onClick={handleToggleTodo}
                backgroundColor={todoConfig.backgroundColor}
            >
                {todoConfig.text}</Button>}
        </div>
        <div className={styles.todoRemoved}><Button>REMOVE</Button></div>
    </li>
}

export default Todo;