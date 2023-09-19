import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('https://type.fit/api/quotes')

    //console.log(data, isLoading, hasError)

    const {author, text} = !!data && data[0] // aca decimos si la data tiene valor entonces tomo 
    // la posicion zero porque data hasta que tenga valor es nulo

    //    if(isLoading){
    //     return (<h1>Loading...</h1>)
    //    } 

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {
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
            }

            <button className='btn btn-primary'>
                Next quote
            </button>

        </>
    )
}
