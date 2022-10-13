import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
import {useEffect} from 'react';
function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(4);
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  let {cPage, setcPage} = props;
  //useEffect runs only once after return statement is executed.
  
  useEffect(function (){
    async function fn(){
      //fetch is inbuilt feature of browser that makes the request to get data -> promise based
      let response = await fetch('https://react-backend101.herokuapp.com/movies');
      response = await response.json();
      setLoaded(false);
      setContent(response.movies);
      
    }
    fn();
  },[])
  
  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
    setcPage(1);
  }
  const setGlobalCount = (moviesCount) =>{
    setCount(moviesCount);
    setcPage(1);
  }

  let filteredContent;
  let totalPagesWaliMovies;
  if(content){
    filteredContent = content;
    /**Searching  */
  if(searchText != ""){
    filteredContent = content.filter((movie) =>{
      let lowerCaseTitle = movie.title.toLowerCase();
      let lowerCaseSearchText = searchText.toLowerCase();
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
    totalPagesWaliMovies = filteredContent;
    /********Number of elements logic & pagination logic********/
    let sidx = (cPage-1)*moviesCount;
    let eidx = sidx+moviesCount;
    filteredContent = filteredContent.slice(sidx,eidx);
  }
  
  return (
    <div>
    <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}></InputBox>
    <MoviesTable
     filteredContent={filteredContent} 
     searchText={searchText} 
     cGenre={props.cGenre}
     content={content}
     isLoaded={isLoaded}
     setContent={setContent}
     cPage={cPage}
     >
     </MoviesTable>
    <Pagination
    moviesCount={moviesCount} 
    totalPagesWaliMovies={totalPagesWaliMovies}
    cPage={cPage}
    setcPage={setcPage}
    ></Pagination>
    </div>
  )
}

export default Movies