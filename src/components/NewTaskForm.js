import React,{useState} from "react";
import { CATEGORIES, TASKS } from "../data";

function NewTaskForm({createTask}) {
  const [inputDetail, setInputDetail] = useState ("")
  const [chooseCategory, setChooseCategory] = useState ("")

function handleSubmit (e){
  e.preventDefault()
  createTask ({"text":inputDetail, "category":chooseCategory})
}
console.log("inputDetail chooseCategory: ", inputDetail, chooseCategory)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={e=> setInputDetail(e.target.value)} placeholder="new task" value={inputDetail}/>
      </label>
      <label>
        Category
        <select name="category" onChange={e=>setChooseCategory(e.target.value)}  >
          {/* render <option> elements for each category here */}
          {CATEGORIES.map((category)=>(
            <option key={category} value={category}>{category}</option>))}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
