import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        //console.log({ name, value })
        //console.log(event.target.value)
        setformState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(() => {
        //console.log('useEffect called!')
    }, []);

    useEffect(() => {
        //console.log('formState changed!')
    }, [formState]);

    useEffect(() => {
        //console.log('email changed!')
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type='text' className='form-control'
                placeholder='Username' name='username'
                value={username} onChange={onInputChange} />

            <input type='email' className='form-control mt-4'
                placeholder='Email' name='email'
                value={email} onChange={onInputChange} />

            {
                (username === 'carmarin') && <Message/>
            }
        </>
    )
}
