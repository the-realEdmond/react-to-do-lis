
import React from "react";
import SearchBar from "./componets/searchBar";
import List from "./componets/list";
import Listfooter from "./componets/listFooter";
import { useState } from "react";

function App() {
  let tasks=[
    {"id":1,
      "TaskName":"Go for a run",
      "isDone":false
    },
    {
      "id":2,
      "TaskName":"lunch",
      isDone:true
    },
    {
      "id":3,
      "TaskName":"Box",
      "isDone":true
    },
    {
      "id":4,
      "TaskName":"cook",
      "isDone":true
    }
  ]
  let [listItems,setList]=useState(tasks)
  return(
  
  <div className="rounded shadow w-25 p-3 mx-auto my-auto">
    <div className="w-50 mx-auto">
    <h2>To Do List</h2>
    </div>

    <SearchBar listItems={listItems} setList={setList}/>
    <List listItems={listItems} setList={setList}/>
    <Listfooter listItems={listItems} setList={setList}/>

  </div>
  )
}

export default App;
