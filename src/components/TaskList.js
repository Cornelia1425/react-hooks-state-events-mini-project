import React from "react";
import Task from "./Task"

function TaskList({tasks, onDelete}) {
/*   console.log("tasks: ",tasks) */




  const tasksToDisplay = tasks.map((task, i)=>(
    <Task key={i} name={task.text} category={task.category} onDelete={onDelete}/>
  )

  )
 

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    
     {/*  {tasks.map((task, i)=>(
        <Task key={i} name={task.text} category={task.category}/>
      )

      )} */}
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
