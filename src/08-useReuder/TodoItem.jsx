import React from 'react'

const styleDoneTodo = (done) => done ? 'text-decoration-line-through' : ''

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className={`algign-self-center ${styleDoneTodo(todo.done)}`}
                onClick={() => onToggleTodo(todo.id)}>
                {todo.description}
            </span>
            <button className='btn btn-danger'
                onClick={() => onDeleteTodo(todo.id)}>
                Borrar</button>
        </li>
    )
}
