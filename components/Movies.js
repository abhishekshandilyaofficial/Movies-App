import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'
import {useEffect} from 'react';
function Movies(props) {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(2);
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);
  const [cPage, setcPage] = React.useState(1);
  //useEffect runs only once after return statement is executed.
  
  useEffect(async function(){
    //fetch is inbuilt feature of browser that makes the request to get data -> promise based
    let response = await fetch('https://react-backend101.herokuapp.com/movies');
    response = await response.json();
    setLoaded(false);
    setContent(response.movies);
    
  },[])
  
  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
  }
  const setGlobalCount = (moviesCount) =>{
    setCount(moviesCount);
    
  }
  return (
    <div>
    <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}></InputBox>
    <MoviesTable
     moviesCount={moviesCount} 
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
    content={content}
    cPage={cPage}
    setcPage={setcPage}
    ></Pagination>
    </div>
  )
}

export default Movies