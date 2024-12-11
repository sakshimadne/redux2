// components/TodoApp.js
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from '../actions/todoActions'
import TodoItem from './TodoItem'

const TodoApp = () => {
  const [title, setTitle] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (title.trim() !== '') {
      dispatch(addTodo(title))
      setTitle('')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Add a new todo'
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => dispatch(toggleTodo(todo.id))}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
