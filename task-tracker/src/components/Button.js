import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, event}) => {
 
  return (
  <button onClick={event}
  
  style={{backgroundColor: color}} 
  className='btn'> {text}
  </button>
  )
}



export default Button
