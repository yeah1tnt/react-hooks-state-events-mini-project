import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {

  const categoryButtons = categories.map(function (category) {
    const className = category === selectedCategory ? "selected" : null;
    function handleSelectCategory(){
      onSelectCategory(category);
    }
    return (
      <button key={category} className={className} onClick={handleSelectCategory}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;