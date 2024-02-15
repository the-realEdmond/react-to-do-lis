import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./listItem";

function SearchBar({listItems,setList}){
    let [searchKey,setSearchKey]=useState('')
    let [originalList,setOriginalList]=useState(listItems)
    
    function loadSearch(e){
      
      setSearchKey(e.target.value)
      let searchResult=  listItems.filter(item=>{
            return item.TaskName.toLowerCase().includes(e.target.value.toLowerCase());
        })
        setList(searchResult)
    }

    function resetSearch() {
        setSearchKey('');
        setList(originalList);
    }
    return(
        <div className="w-75 mx-auto my-3">
            <input className="input w-75" type="search" value={searchKey} onChange={loadSearch}/>
            <button className="btn btn-outline-dark" onClick={resetSearch}>
                <FontAwesomeIcon icon={faX}/>
                </button>
        </div>
    )
}

export default SearchBar