import React from "react";
import Button from 'react-bootstrap/Button';

function  AddTaskBtn(){

    return(
      
        <div className="w-75 mx-auto d-flex justify-content-center">
        <input className="w-50" type="text"/>
        <Button variant="success btn-sm ms-5px ">Add Task</Button>
        </div>
     
        
    )
}

export default AddTaskBtn;