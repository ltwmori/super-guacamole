import React from 'react'
import Button from './Button'

const Header = (props) => {
    const event = (e) => {
       
    }

  return (
    <header className='header'>
      <h1>{props.title}</h1>
      <Button color = 'green' text='Add' event={event}/>
    </header>
  )
}

export default Header
  