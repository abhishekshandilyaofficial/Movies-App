import React, { useEffect } from 'react'

function Genre() {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  useEffect(async function(){
    let response = await fetch('https://react-backend101.herokuapp.com/genres');
    response = await response.json();
    setLoaded(false);
    setContent(response.genres);
  }, [])
  return (
    <div className='Genre'>
      <div className='mr-6 font-bold border-2 w-40 h-8 text-center'>Genre</div>
      {isLoaded == true ? <div className='font-bold'>Loading...</div>:
        content.map(function(genres){
          return <div className='mr-6 font-bold border-2 border-t-0 w-40 h-8 text-center'>{genres.name}</div>
        })
      }
    </div>
  )
}

export default Genre