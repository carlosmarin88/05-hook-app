import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote,Quote } from '../03-examples'



export const Layaout = () => {

    const nextQuote = (data) => {
        if (counter >= (data.length - 1)) {
            reset()
        }
        return data[counter]
    }

    const { counter, increment, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://type.fit/api/quotes/`)

    const { author, text } = !!data && nextQuote(data)

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
                (isLoading) ? <LoadingQuote /> : <Quote text={text} author={author} />
            }
            <button onClick={() => increment()}
                className='btn btn-primary'
                disabled={isLoading}>
                Next quote
            </button>

        </>
    )
}
