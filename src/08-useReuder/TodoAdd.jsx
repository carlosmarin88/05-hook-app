import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

 /*
    const [inputDescription, setInputDescription] = useState('')


    const onChangeInputDescription = ({target}) => {
        setInputDescription(target.value)
    }

    const onClickAddNewTodo = (event) => {
        event.preventDefault()
        onNewTodo({
            id: new Date().getTime(),
            description: inputDescription,
            done: false
        })
        setInputDescription('')
        //console.log('click agregar')
        
    }
*/

    const {description, onInputChange, onResetForm} = useForm({
        description: '',
    })

    const onFormSubmit = (event) => {
        event.preventDefault()

        if(description.lenght <=1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
        onNewTodo(newTodo)
    }


    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                name='description'
                value={description}
                onChange={onInputChange} />
            <button
                // onClick={onClickAddNewTodo}
                type='submit'
                className='btn btn-outline-primary mt-4'>
                Agregar
            </button>
        </form>
    )
}
