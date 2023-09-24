import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

// nos ayuda a memorizar funciones
export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      (value) => {
        //console.log('setCounter(counter  + 1)')
        //setCounter(counter  + 1)
        setCounter((c)=> c + value)
      },[],
    )

    useEffect(()=> {
        //incrementFather
        
    }, [incrementFather])
    

    // const incrementFather = () => {
    //     setCounter(counter + 1)
    // }
  
    return (
    <>
        <h1>useCallback Hook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={incrementFather} />
    </>
  )
}
