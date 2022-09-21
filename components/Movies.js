import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagination from './Pagination'

function Movies() {
  let [searchText, setSearchText] = React.useState("");
  const setGlobalSearchText = (searchText) => {
    setSearchText(searchText);
  }
  return (
    <div>
    <InputBox setGlobalSearchText={setGlobalSearchText}></InputBox>
    <MoviesTable searchText={searchText}></MoviesTable>
    <Pagination></Pagination>
    </div>
  )
}

export default Movies