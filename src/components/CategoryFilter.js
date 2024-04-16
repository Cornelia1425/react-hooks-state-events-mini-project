import React, {useState} from "react";

function CategoryFilter({onCategoryChange}) {

  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here className="selected"  className={selectedButton === "All" ? 'selected' : ''}  */}
      <button onClick={()=>onCategoryChange("All")}>All</button>
      <button onClick={()=>onCategoryChange("Code")}>Code</button>
      <button  onClick={()=>onCategoryChange("Food")}>Food</button>
      <button  onClick={()=>onCategoryChange("Money")}>Money</button>
      <button  onClick={()=>onCategoryChange("Misc")}>Misc</button>
    </div>
  );
}

export default CategoryFilter;
