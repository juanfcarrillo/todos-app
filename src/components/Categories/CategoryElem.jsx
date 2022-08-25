import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";


const CategoryElem = ({ children, id, openForm, content }) => {

  return (
    <div className="v-center flex p-1 g-5 border mg-tp shadow">
      {/* Category Content */}
      <div className="v-center g-1">
        <h2 className="todo-elem">{children}</h2>
      </div>
      {/* Icon for remove */}
      <div
        className="icon-container"
        onClick={() => openForm({id, content})}
      >
        <Link to="/">
          <AiFillEdit className="s-icon" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryElem;
