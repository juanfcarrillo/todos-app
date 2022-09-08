import { useParams } from "react-router-dom";
import { useState } from "react";
import { TodoElem } from "./TodoElem";
import { UpdateTodo } from "./PopUp";
import { HorizontalLoader } from "../../../components";
import { useTodos } from "../../../hooks";

export const TodosList = () => {

  const { categoryID } = useParams()

  const { snapshot, loading } = useTodos(categoryID)

  const [popUpProperties, setPopUpProperties] = useState({
      open: false,
      currentId: null,
      content: "",
    }
  );

  const openForm = ({ id, content }) => {
    setPopUpProperties((popUpProperties) => {
      return {
        ...popUpProperties,
          open: true,
          currentId: id,
          content: content,
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
      {popUpProperties.open && (
        <UpdateTodo
          id={popUpProperties.currentId}
          exitForm={exitForm}
          content={popUpProperties.content}
        />
      )}
      {!loading
        ? snapshot.docs.map((doc) => (
            <TodoElem
              key={doc.id}
              id={doc.id}
              openForm={openForm}
              content={doc.data().content}
            >
              {doc.data().content}
            </TodoElem>
          ))
        : !loading && <h2 className="mg-tp-5">Agregue Categorias</h2>}
    </>
  );
};

