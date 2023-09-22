import React, { useLayoutEffect, useRef, useState } from 'react'

export const Quote = ({ text, author }) => {

    const pRef = useRef()
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        //console.log(pRef.current.getBoundingClientRect())
        const {width, height} = pRef.current.getBoundingClientRect()
        setBoxSize({width, height})
    }, [text])

    return (
        <>
            <blockquote className='blockquote text-end'
                style={{ display: 'flex' }}>
                <p className='mb-1' ref={pRef}>
                    {text}
                </p>
                <footer className='blockquote-footer mt-4'>{author}</footer>
            </blockquote>

            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}
