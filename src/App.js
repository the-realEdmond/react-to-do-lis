import React, { useState } from "react";
import Task from "./componets/task";



function App() {
  let list=[
    {
        "taskId":1,
        "isDone":false,
        "taskName":"Wake Up "

    },
    {
        "taskId":2,
        "isDone":false,
        "taskName":"Work Out "

    },
    {
        "taskId":3,
        "isDone":false,
        "taskName":"Breakfirst "

    },
    {
        "taskId":4,
        "isDone":true,
        "taskName":"Go to work "

    }
]

  return (
<>
<Task list={list} />


</>
  );
}

export default App;
