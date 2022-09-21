import React from 'react'
import Movies from './Movies'
import Genre from './Genre'
function Main() {
  return (
    <div className='flex'>
        <Genre></Genre>
        <Movies></Movies>
    </div>
  )
}

export default Main