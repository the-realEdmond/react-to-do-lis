import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faTrash, faEdit,faClock } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";



function ListItem ({taskName,isDone}){
    let [checked,setchecked]=useState(isDone)
    let button=<FontAwesomeIcon icon={faEllipsis}/>
return(
 
        <tr>
            <td>{taskName}</td>
            <td><input type="checkbox" checked={checked} onChange={()=>{setchecked(!checked)}}/></td>
            <td>
           
            <Dropdown>
      <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
       <FontAwesomeIcon icon={faEllipsis}/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><FontAwesomeIcon icon={faTrash}/> Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-2"><FontAwesomeIcon icon={faEdit}/> Edit</Dropdown.Item>
        <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faClock}/> Set Reminder</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
          
           
            </td>
        </tr>
        
  
)
}

export default ListItem;