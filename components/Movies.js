import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies() {
  let [searchText, setSearchText] = React.useState("");
  let [moviesCount, setCount] = React.useState(9);
  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
  }
  const setGlobalCount = (moviesCount) =>{
    setCount(moviesCount);
    
  }
  return (
    <div>
    <InputBox setGlobalSearchText={setGlobalSearchText} setGlobalCount={setGlobalCount}></InputBox>
    <MoviesTable moviesCount={moviesCount} searchText={searchText}></MoviesTable>
    <Pagination></Pagination>
    </div>
  )
}

export default Movies