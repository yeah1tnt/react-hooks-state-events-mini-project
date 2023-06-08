import React, { useState } from "react";

function NewTaskForm({onTaskFormSubmit, categories}) {
  
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");
  
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Code")
  }
  function handleText(e){
    setText(e.target.value);
  }
  function handleCategory(e){
    setCategory(e.target.value);
  }

  const catMap = categories.map(function (category){ 
    return <option key={category}>{category}</option>
  })
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategory}>
          {catMap}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;