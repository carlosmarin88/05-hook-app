import React from 'react'
import { useFetch, useCounter } from '../hooks'
import { LoadingQuote,Quote } from './'



export const MultipleCustomHooks = () => {

    const nextQuote = (data) => {
        if (counter >= (data.length - 1)) {
            //console.log('aplico el reset')
            reset()
        }
        return data[counter]
    }

    const { counter, increment, reset } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://type.fit/api/quotes/`)

    //console.log(data, isLoading, hasError)

    const { author, text } = !!data && nextQuote(data) // aca decimos si la data tiene valor entonces tomo 
    // la posicion zero porque data hasta que tenga valor es nulo

    //    if(isLoading){
    //     return (<h1>Loading...</h1>)
    //    } 

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {/* {
                (isLoading)
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    ) : (
                        <blockquote className='blockquote text-end'>
                            <p className='mb-1'>
                                {text}
                            </p>
                            <footer className='blockquote-footer mt-4'>{author}</footer>
                        </blockquote>
                    )
            } */}
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
