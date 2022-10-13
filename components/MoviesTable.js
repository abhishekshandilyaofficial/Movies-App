import React from 'react'

function MoviesTable(props) {
 let {content, isLoaded, setContent, filteredContent} = props;
  const deleteMovie = (tobeDeletedMovieId) => {
    let restofTheMovies = content.filter((movie) => movie._id !== tobeDeletedMovieId);
    setContent(restofTheMovies);
  }
  
  

  
  return (
    <div>
    {
      isLoaded == true ? <div className="font-bold"> Loading...</div>:
      <table className='table-auto'>
        <thead>
          <tr>
            <th className='mx-2 px-2 text-center'>#</th>
            <th className='mx-2 px-2 text-center'>Title</th>
            <th className='mx-3 px-2 text-center'>Genre</th>
            <th className='mx-3 px-2 text-center'>Stock</th>
            <th className='mx-3 px-2 text-center'>Ratings</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {filteredContent.map(function(movie,idx){
            return <tr key={movie._id}>
            <td className='mx-2 px-2 text-center'>{idx+1}</td>
            <td className='mx-2 px-2 text-center'>{movie.title}</td>
            <td className='mx-2 px-2 text-center'>{movie.genre.name}</td>
            <td className='mx-2 px-2 text-center'>{movie.numberInStock}</td>
            <td className='mx-2 px-2 text-center'>{movie.dailyRentalRate}</td>
            <td><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
            onClick={() =>{
              deleteMovie(movie._id);
               }}
            >Delete</button></td>
          </tr>
          })}
        </tbody>
      </table>
    
    }
    </div>
  )
}

export default MoviesTable
/*

*/