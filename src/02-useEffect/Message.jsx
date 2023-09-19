import React, { useEffect, useState } from 'react'

export const Message = () => {


  const [coords, setCoords] = useState({x: 0, y: 0})  

  useEffect(() => {
    //console.log('Mesage Mounted')
    
    const onMouseMove = ({x, y}) => { // desestructuro el evento
        //const coords = {x, y}
        //console.log(coords)
        setCoords({x, y})
    }

    window.addEventListener('mousemove', onMouseMove)
  
    return () => {
        window.removeEventListener('mousemove', onMouseMove)
      //console.log('Message Unmounted')
    }
  }, [])
    


  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
