import React, { useState } from 'react'

export const TodoAdd = ({onNewTodo}) => {


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



    return (
        <form>
            <input type="text"
                placeholder='¿Que hay que hacer?'
                className='form-control'
                value={inputDescription}
                onChange={onChangeInputDescription} />
            <button
                onClick={onClickAddNewTodo}
                type='submit'
                className='btn btn-outline-primary mt-4'>
                Agregar
            </button>
        </form>
    )
}
