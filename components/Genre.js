import React, { useEffect } from 'react'

function Genre(props) {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  const sendGenre = (e) => {
    props.setGlobalGenre(e.target.innerText);
  }
  useEffect(async function(){
    let response = await fetch('https://react-backend101.herokuapp.com/genres');
    response = await response.json();
    setLoaded(false);
    setContent(response.genres);
  }, [])
  return (
    <div className='Genre'>
      <div className='mr-6 font-bold border-2 w-40 h-8 text-center hover:bg-blue-700'>Genre</div>
      {isLoaded == true ? <div className='font-bold'>Loading...</div>:
        content.map(function(genres){
          return <div className='mr-6 font-bold border-2 border-t-0 w-40 h-8 text-center hover:bg-blue-700'
          onClick={sendGenre} 
          >{genres.name}</div>
        })
      }
    </div>
  )
}

export default Genre