import { useEffect, useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { CheckBox } from "./CheckBox";

export const TodoElem = ({ children, id, openForm, content, ...props }) => {

  const handleClick = async () => {
		checkboxRef.current.parentElement.classList.toggle('crossed')
		await toggleCompleteTodo(id)
	}

	useEffect(() => {
		checkboxRef.current.checked = props.completed ? true : false;
		checkboxRef.current.parentElement.classList.add(props.completed && 'crossed')
	},[])

	const checkboxRef = useRef()

  return (
    <div className={`v-center flex p-1 g-5 border mg-tp shadow`}>
      <CheckBox ref={checkboxRef} onClick={handleClick}/>
      {/* Category Content */}
      <div className="v-center g-1 w-100 todo-elem-container">
        <h2 className="todo-elem">{children}</h2>
      </div>
      {/* Icon for remove */}
      <div
        className="icon-container"
        onClick={() => openForm(id, { content })}>
        <AiFillEdit className="s-icon link" />
      </div>
    </div>
  );
};

