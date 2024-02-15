import React, { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Listfooter({listItems,setList}){
    let [newTask,setNewTask]=useState('')

    function addTask(){
       
        let lastItemId = listItems[listItems.length - 1].id; 

        let newList = [
            ...listItems,
            {
                "id": lastItemId + 1,
                "TaskName": newTask,
                "isDone":false
            }
        ]
       
      
        
       setList(newList)            
    }


    let button=  <FontAwesomeIcon icon={faPlus} />
    return(
        <div className=" d-flex  w-75 mx-auto">
            <input className="w-75 input" type="Text" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}} placeholder="Add New Task"/>
            <button className="btn btn-outline-dark" onClick={addTask}>
           {button}
            </button>
                    
        </div>
    )
}
export default Listfooter