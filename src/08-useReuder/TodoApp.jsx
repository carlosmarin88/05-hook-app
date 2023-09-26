import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
]

const initTodo = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] // si tengo un valor retorno lo del storage y sino un array vacio
}

export const TodoApp = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, initTodo)

    useEffect(() => {
        //console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = (id) => {
        dispatchTodo({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        //console.log({id})
         dispatchTodo({
             type: '[TODO] Toggle Todo',
             payload: id
         })
    }


    return (
        <>
            <h1>TodoApp 10, <small>pendientes: 2</small></h1>
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
