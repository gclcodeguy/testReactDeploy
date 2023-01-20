import React from 'react'
import './Button.css';

export default function Button(props) {
    const color = props.color
    console.log(color)
    function handleClick () {
        window.alert("You are a legend.")
    }
  return (
    <div>
    <button type="button" className='buttonOne' onClick={handleClick} style={{backgroundColor: color, borderRadius: 5}}>Click Me</button>
    </div>
    
  )
}
