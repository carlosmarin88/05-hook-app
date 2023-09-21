import React from 'react'

export const Quote = ({ text, author }) => {
    return (
        <blockquote className='blockquote text-end'>
            <p className='mb-1'>
                {text}
            </p>
            <footer className='blockquote-footer mt-4'>{author}</footer>
        </blockquote>
    )
}
