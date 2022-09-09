import { useState } from "react";
import { TodoElem } from "./TodoElem";
import { UpdateTodo } from "./PopUp";
import { HorizontalLoader } from "../../../components";
import { useTodos } from "../../../hooks";
import { useContext } from "react";
import { CategoryIDContext } from "../../../context";

export const TodosList = () => {
  const { CategoryID } = useContext(CategoryIDContext)

  const { snapshot, loading } = useTodos(CategoryID);

  const [popUpProperties, setPopUpProperties] = useState({
    open: false,
    currentId: null,
    content: "",
  });

  const openForm = ( id, options) => {
    setPopUpProperties((popUpProperties) => {
      return {
        ...popUpProperties,
        open: true,
        currentId: id,
        ...options
      };
    });
  };

  const exitForm = () => {
    setPopUpProperties((popUpProperties) => {
      return {
        ...popUpProperties,
        open: false,
        currentId: null,
        content: "",
      };
    });
  };

  return (
    <>
      {loading && <HorizontalLoader />}
      {!loading && snapshot?.docs.length < 1 && (<h2 className="mg-tp-5">Agregue Tareas</h2>)}
      {popUpProperties.open && (
        <UpdateTodo
          id={popUpProperties.currentId}
          exitForm={exitForm}
          content={popUpProperties.content}
        />
      )}
      {!loading &&
        snapshot.docs.map((doc) => (
          <TodoElem
            key={doc.id}
            id={doc.id}
            openForm={openForm}
            content={doc.data().content}
            completed={doc.data().completed}
          >
            {doc.data().content}
          </TodoElem>
        ))}
    </>
  );
};
