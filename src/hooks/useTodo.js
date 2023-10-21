import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReuder/todoReducer"

const initTodo = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] // si tengo un valor retorno lo del storage y sino un array vacio
}

export const useTodo = (initialTodoState = []) => {


    const [todos, dispatchTodo] = useReducer(todoReducer, initialTodoState, initTodo)

    useEffect(() => {
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
         dispatchTodo({
             type: '[TODO] Toggle Todo',
             payload: id
         })
    }
    
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }

}