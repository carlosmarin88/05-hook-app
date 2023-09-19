import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHoolk = () => {
  
  const { counter, increment, decrement, reset } = useCounter();
  
  return (
    <>
        <h1>Counter with custom Hoolk: {counter}</h1>
        <hr/>
        <button className='btn btn-primary' onClick={()=> increment(2)}>+1</button>
        <button className='btn btn-primary' onClick={reset}>Reset</button> {/* acordate que este metodo por referencia envia el evento en el parametro */}
        <button className='btn btn-primary' onClick={()=> decrement(2)}>-1</button>
    </>
    
  )
}
