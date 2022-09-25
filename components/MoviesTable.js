import React from 'react'
import {useEffect} from 'react';
function MoviesTable(props) {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  //useEffect runs only once after return statement is executed.
  
  useEffect(async function(){
    //fetch is inbuilt feature of browser that makes the request to get data -> promise based
    let response = await fetch('https://react-backend101.herokuapp.com/movies');
    response = await response.json();
    setLoaded(false);
    setContent(response.movies);
    
  },[])
  const deleteMovie = (tobeDeletedMovieId) => {
    let restofTheMovies = content.filter((movie) => movie._id !== tobeDeletedMovieId);
    setContent(restofTheMovies);
  }
  
  
  let filteredContent;
  if(content){
    filteredContent = content;
    /**Searching  */
  if(props.searchText != ""){
    filteredContent = content.filter((movie) =>{
      let lowerCaseTitle = movie.title.toLowerCase();
      let lowerCaseSearchText = props.searchText.toLowerCase();
      /**movie(title) -> lowercase */
      return lowerCaseTitle.includes(lowerCaseSearchText);
    }
  )}
    
    //*******genre********/
    if(props.cGenre != ""){
      filteredContent = filteredContent.filter(
        function(movie){
          return movie.genre.name.trim() == props.cGenre.trim();
        }
      )
    }
    /********Number of elements logic********/
    filteredContent = filteredContent.slice(0,props.moviesCount);
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