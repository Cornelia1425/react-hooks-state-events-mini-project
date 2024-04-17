import React from "react";
import {useState, useEffect} from "react"
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState (TASKS)
  const [selectedCategory, setSelectedCategory] =useState("All")
  const [tasksbyCategory, setTasksByCategory] = useState (TASKS)



  function onCategoryChange(string){
    // console.log("e.target: ",e.target.innerText)
    console.log("string: ",string)
    // setSelectedCategory(()=>e.target.innerText)
    setSelectedCategory(string)
    
    console.log ("setSelectedCategory taking string:", selectedCategory)

  if(string === "All") {
      setTasksByCategory(tasks)} 
    else { 
      const tasksBySelectedCategory= tasks.filter( (task)=> task.category === string)
      setTasksByCategory(tasksBySelectedCategory)}  
  }
  

  console.log ("selectedCategory:", selectedCategory)
  console.log ("tasks after category change:", tasksbyCategory)


  function onDelete(taskname){
    const listAfterDelete = selectedCategory.filter((task)=>taskname ===task.text? false: true )
    setTasks(listAfterDelete)
  }



  function createTask(newTask){
    console.log ("newTask: ", newTask)
    setTasks([...tasks, newTask])
    setTasksByCategory([...tasksbyCategory, newTask])
 /*  fetch('../data',{
    method:'POST', 
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body:JSON.stringify({inputDetail, chooseCategory}) //not sure about it here?
  })
  .then(res=>res.json())
  .then(newTask =>
    setTasks([...tasks, newTask])) */
  }

  console.log ("tasks:", tasks)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryChange={onCategoryChange}/>
      <NewTaskForm createTask={createTask} />
      <TaskList tasks={tasksbyCategory} onDelete={onDelete} />
    </div>
  );
}

export default App;
