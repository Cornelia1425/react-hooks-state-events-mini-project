import React, {useState} from "react";

function CategoryFilter({onCategoryChange}) {

  const [selectedButton, setSelectedButton] = useState("")
  const handleButtonClick = (category) => {
    setSelectedButton(category);
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here className="selected"  className={selectedButton === "All" ? 'selected' : ''}  */}
      <button className={selectedButton === "All" ? 'selected' : ''}  onClick={()=>handleButtonClick("All")}>All</button>
      <button className={selectedButton === "Code" ? 'selected' : ''}  onClick={()=>handleButtonClick("Code")}>Code</button>
      <button className={selectedButton === "Food" ? 'selected' : ''}  onClick={()=>handleButtonClick("Food")}>Food</button>
      <button className={selectedButton === "Money" ? 'selected' : ''}  onClick={()=>handleButtonClick("Money")}>Money</button>
      <button className={selectedButton === "Misc" ? 'selected' : ''}  onClick={()=>handleButtonClick("Misc")}>Misc</button>
    </div>
  );
}

export default CategoryFilter;
