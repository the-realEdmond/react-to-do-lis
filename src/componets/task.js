import React, { useState } from 'react';
import AddTaskBtn from './addTaskBtn'
function ListItem({item}){
    const [isDone,setIsdone]=useState(item.isDone)
  return(    
          <tbody>
            <tr className=''>
              <td> 
              <input    
                  type='checkbox'
                  checked={isDone}
                  onChange={() => {
                setIsdone(!isDone)
                
                  }}
                />
              </td>

               <td>
               {item.taskName}
                </td>    

                <td>
                <h5>X</h5>
                </td> 

            </tr>
        </tbody>

  

  )
}

function Task({list}){
let TaskList= list.map((item)=>( <ListItem key={item.taskId} item={item} />)
   
)
    return(
      <div className='w-25 mx-auto mt-250px rounded shadow'>
        <div className='w-50 mx-auto'>
        <h3 >TO DO LIST </h3>
        </div>
        
      <table className='w-75 mx-auto'>
      <thead>
        <tr>
        <th>Is done</th>
        <th>Task Name</th>
        <th></th>

        </tr>
        
      </thead>
      {TaskList}
     
      </table> 
      <AddTaskBtn />
      </div>
      
    )
}

export default Task;
