import React from "react";
import AddTodo from "./AddTodo";
import FormTodoPopUp from "./FormTodoPopUp/FormTodoPopUp";
import Categories from "./Categories/Categories";
import { useState, useRef } from "react";

const ListTodo = () => {

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
      {showElements.formTodo && <FormTodoPopUp exitForm={hideForm}/>}

      <AddTodo handleAddButton={handleAddButton}/>
      <Categories/>
      
    </div>
  );
};

export default ListTodo;
