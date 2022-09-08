import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";


export const CategoryElem = ({ children, id, openForm, content }) => {

  return (
    <div className="v-center flex p-1 g-5 border mg-tp shadow">
      {/* Category Content */}
      <Link to={`${id}`} className="w-100">
        <div className="v-center g-1 w-100">
          <h2 className="todo-elem">{children}</h2>
        </div>
      </Link>
      {/* Icon for remove */}
      <div
        className="icon-container"
        onClick={() => openForm({id, content})}>
        <AiFillEdit className="s-icon link" />
      </div>
    </div>
  );
};

