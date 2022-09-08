import { useEffect, useRef, useState } from "react";
import { FiTrash } from 'react-icons/fi'
import PopUp from "../../../../components/PopUp/PopUp";
import { updateCategory, deleteCategory } from "../../../../services/Categories";


export const UpdateTodo = ({id, content, exitForm, ...props }) => {
  const [contentValue, setContentValue] = useState(content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contentValue.trim() !== "") {
      exitForm();
      updateCategory({id, content: contentValue });
    }
  };

  const handleDelete = () => {
    exitForm()
    deleteCategory({id})
  }

  const handleContentChange = (e) => {
    setContentValue(e.target.value);
  };

  const refContentInput = useRef();

  useEffect(() => {
    refContentInput.current.focus();
  }, []);

  return (
    <PopUp exitForm={exitForm}>
      <form onSubmit={handleSubmit}>
        <div className="f g-1">
          <input
            type="text"
            name="content"
            onChange={handleContentChange}
            autoComplete="off"
            className="pop-up-input shadow"
            value={contentValue}
            ref={refContentInput}
          />
          <button className="button shadow border">Aceptar</button>
        </div>
      </form>
      <button className="button shadow border" onClick={handleDelete}><FiTrash/></button>
    </PopUp>
  );
};

