import React, { useEffect, useReducer } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks'

export const TodoApp = () => {

    const { todos, handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    } = useTodo()

    return (
        <>
            <h1>TodoApp {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />
            <div className='row'>
                <div className='col-7'>

                    {/* TodoList */}
                    <TodoList todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo} />
                    {/* Fin TodoList */}
                </div>
                <div className='col-5'>

                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo ) */}
                    {/*{id: new Date(), description: '', done: false} */}
                    <TodoAdd onNewTodo={handleNewTodo} />
                    {/*Fin TodoAdd*/}
                </div>
            </div>
        </>
    )
}
