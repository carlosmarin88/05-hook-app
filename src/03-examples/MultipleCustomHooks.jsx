import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

  const {data, isLoading, hasError} = useFetch('https://type.fit/api/quotes')

  console.log(data, isLoading, hasError)

  return (
     <>
        <h1>BreakingBad Quotes</h1>
        <hr/>
     </>
  )
}
