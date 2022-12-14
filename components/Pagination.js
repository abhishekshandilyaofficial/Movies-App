import React from 'react'

function Pagination(props) {
  let {moviesCount, totalPagesWaliMovies, cPage, setcPage} = props;
  let noOfPages = Math.ceil(totalPagesWaliMovies.length/moviesCount);
  let pagesArr = [];
  if(totalPagesWaliMovies){
    
    for(let i = 1; i <= noOfPages; i++){
      pagesArr.push(i);
    }
  }
  
  return (
    // <div>
    //   {/* <button className="bg-blue-500 hover:bg-blue-700  
    //   font-bold border-2 py-2 px-3 rounded">1</button>
    //    <button className=" hover:bg-blue-700  
    //   font-bold border-2 py-2 px-3 rounded">2</button>
    //    <button className=" hover:bg-blue-700  
    //   font-bold border-2 py-2 px-3 rounded">3</button> */}
    // </div>
    <>
      {pagesArr.map(function(pageNumber){
        let css = pageNumber == cPage ? "bg-blue-700 hover:bg-blue-500 font-bold border-2 py-2 px-3 rounded text-white":"hover:bg-blue-500 font-bold border-2 py-2 px-3 rounded"; 
      return (<button key = {pageNumber} className = {css} onClick={()=>
      {
        setcPage(pageNumber);
      }
      }>{pageNumber}</button>)
    })}
    </>
    
  )
}
export default Pagination