import React from 'react'
function InputBox(props) {
    let [searchText, setSearchText] = React.useState("");
    let [numberOfItems, setNumberOfItems] = React.useState(4);

    const handleText = (e) => {
        //local input change karta hai -> ui
        setSearchText(e.target.vale);
        //send to the parent
        props.setGlobalSearchText(e.target.value);
    }
    const handleCount = (e) => {
        setNumberOfItems(e.target.value);
    }

  return (
   <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">New</button>
        <input className="border rounded py-1 px-1 mx-2 font-bold" type="text" 
        value={searchText} onChange={handleText}></input>
        <input className="border rounded py-1 px-1 mx-2 font-bold" type="number" 
        value={numberOfItems} onChange={handleCount}></input>
   </>
  )
}

export default InputBox