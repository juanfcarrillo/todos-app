import { useEffect, useRef, useState } from "react";
import PopUp from "../../../../components/PopUp/PopUp";
import { addCategory } from "../../../../services/Categories";

export const AddTodo = ({ children, exitForm, ...props }) => {
  const [contentValue, setContentValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contentValue.trim() !== "") {
      exitForm();
      addCategory({ content: contentValue });
    }
  };

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
    </PopUp>
  );
};

