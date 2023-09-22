import React, { useRef } from 'react'

export const FocusScreen = () => {


    const inputRef = useRef()

    const onFocus = () => {
        //console.log(inputRef)
        inputRef.current.select()
        //document.querySelector('input').select()
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input
                ref={inputRef}
                type='text' placeholder='Ingrese su nombre'
                className='form-control' />

            <button className='btn btn-primary mt-4'
                onClick={onFocus}>
                Set Focus
            </button>
        </>
    )
}
