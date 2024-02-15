import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";


function ListItem ({taskName,isDone}){
    let [checked,setchecked]=useState(isDone)
    let button=<FontAwesomeIcon icon={faEllipsis}/>
return(
 
        <tr>
            <td>{taskName}</td>
            <td><input type="checkbox" checked={checked} onChange={()=>{setchecked(!checked)}}/></td>
            <td>
                <button>
                {button}
                </button>
            </td>
        </tr>
  
)
}

export default ListItem;