import React, { useState } from "react";
import ListItem from "./listItem";
function List({listItems,setList}){


    let items=listItems.map((item,index)=>(
        <ListItem key={item.id} index={index} listItems={listItems} setlist={setList} taskName={item.TaskName} isDone={item.isDone}/>
    )

    )
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    )
}
export default List

