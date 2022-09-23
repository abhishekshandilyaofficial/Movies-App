import React from 'react'
import Movies from './Movies'
import Genre from './Genre'

function Main() {
  const [cGenre, setGenre] = React.useState("");

  const setGlobalGenre = (nGenre) => {
    if(nGenre == "All Genre"){
      setGenre("");
    }else{
      setGenre(nGenre)
    }
    
  }
  return (
    <div className='flex'>
        <Genre setGlobalGenre={setGlobalGenre}></Genre>
        <Movies cGenre={cGenre}></Movies>
    </div>
  )
}

export default Main