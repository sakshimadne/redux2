// components/TodoItem.js
import React from 'react'

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li style={{ margin: '10px 0', listStyle: 'none' }}>
      <span
        onClick={onToggle}
        style={{
          textDecoration: todo.status ? 'line-through' : 'none',
          cursor: 'pointer',
          marginRight: '10px',
        }}
      >
        {todo.title}
      </span>
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
