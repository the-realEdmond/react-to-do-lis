import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faTrash, faEdit,faClock } from "@fortawesome/free-solid-svg-icons";

import { Dropdown } from "react-bootstrap";

function EditForm({ setIsEditting, listItems, setlist, index }) {
    let [newName, setNewName] = useState('');

    function editItem() {
        const newList = [...listItems];
        newList[index].TaskName = newName; 
        setlist(newList); 
        setIsEditting(false); 
    }
    return(
        <tr>
        <td colSpan={3}>
                    <input type="text" value={newName} onChange={(e)=>{setNewName(e.target.value)}}/> <button className="btn btn-outline-primary btn-sm"  onClick={editItem}>Edit</button>
                </td>
        </tr>
       
    )
}

function TableRow({taskName,isDone,index,listItems,setlist,setIsEditting}){
    let [checked,setchecked]=useState(isDone)
    function deleteItem() {
        let newList;
        if (index === 0) {
            newList = listItems.slice(1); // Remove the first item
        } else if (index > 0 && index < listItems.length) {
            newList = listItems.slice(0, index).concat(listItems.slice(index + 1)); // Remove item at index
        } else {
            // Handle invalid index or index out of bounds
            console.error('Invalid index:', index);
            return;
        }
        setlist(newList)
    }
    
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
                    <Dropdown.Item href="#/action-1" onClick={deleteItem}><FontAwesomeIcon icon={faTrash} /> Delete</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={()=>setIsEditting(true)}><FontAwesomeIcon icon={faEdit}  /> Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faClock}/> Set Reminder</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          
           
            </td>
        </tr>
    )
}


function ListItem ({taskName,isDone,index,listItems,setlist}){

    
    let [isEditting,setIsEditting]=useState(false)

    let button=<FontAwesomeIcon icon={faEllipsis}/>

    let output;
    
    if (isEditting){
        output=<EditForm index={index} listItems={listItems} setlist={setlist} setIsEditting={setIsEditting} />
        
    }else{
        output=<TableRow taskName={taskName} isDone={isDone} index={index} listItems={listItems} setlist={setlist} setIsEditting={setIsEditting}/>
       
    }

    return(
    <>
    {output}
    </>

    )
}

export default ListItem;