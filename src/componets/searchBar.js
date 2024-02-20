import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from "@fortawesome/free-solid-svg-icons";
import ListItem from "./listItem";

function SearchBar({ listItems, setList }) {
    let [searchKey, setSearchKey] = useState('');
    let [originalList, setOriginalList] = useState(listItems);
    
    function loadSearch(e) {
        setSearchKey(e.target.value);// useless comment

      
          console.log(e)
        
        let searchResult = listItems.filter(item => {
            return item.TaskName.toLowerCase().includes(e.target.value.toLowerCase());
        });
        
        if (e.target.value === '') {
            setList(originalList); 
        } else {
            setList(searchResult); 
        }
    }

    return (
        <div className="w-75 mx-auto my-3">
            <input className="input  mx-auto" type="search" value={searchKey} onChange={loadSearch} />
        </div>
    );
}

export default SearchBar;
