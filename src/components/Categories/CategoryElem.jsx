import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import FormPopUpEdit from "../FormTodoPopUp/FormPopUpEdit";

const CategoryElem = ({ children, id, openForm, exitForm, openEdit}) => {

  return (
    <div className="v-center flex p-1 g-5 border mg-tp shadow">
      {openEdit && <FormPopUpEdit exitForm={exitForm} id={id}/>}
      <div className="v-center g-1">
        <h2 className="todo-elem">{children}</h2>
      </div>
      <div className="icon-container" onClick={openForm}>
        <Link to="/">
          <AiFillEdit className="s-icon" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryElem
