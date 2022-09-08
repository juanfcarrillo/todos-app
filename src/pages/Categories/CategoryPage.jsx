import React, { useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import { CategoriesList, AddCategory } from "./Components";

const CategoryPage = () => {

  const [showElements, setShowElements] = useState({
    formTodo: false
  })

  const handleAddButton = () => {
    setShowElements((showElements) => {return {...showElements, formTodo: true}})
  }

  const hideForm = () => {
    setShowElements((showElements) => {return {...showElements, formTodo: false}})
  }

  return (
    <div className="container container-todos">
      {showElements.formTodo && <AddCategory exitForm={hideForm}/>}
      <AddButton handleAddButton={handleAddButton}/>
      <CategoriesList/>
    </div>
  );
};

export default CategoryPage;
