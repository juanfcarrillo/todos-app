import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { categoryCollection } from "../../../services/Categories/categoryCollection";
import { UpdateCategory } from "./PopUp";
import { CategoryElem } from "./CategoryElem";
import { HorizontalLoader } from "../../../components";

const CategoriesList = () => {
  const [snapshot, loading, error] = useCollection(categoryCollection);

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
        <UpdateCategory
          id={popUpProperties.currentId}
          exitForm={exitForm}
          content={popUpProperties.content}
        />
      )}
      {snapshot?.docs?.length
        ? snapshot.docs.map((doc) => (
            <CategoryElem
              key={doc.id}
              id={doc.id}
              openForm={openForm}
              content={doc.data().content}
            >
              {doc.data().content}
            </CategoryElem>
          ))
        : !loading && <h2 className="mg-tp-5">Agregue Categorias</h2>}
    </>
  );
};

export default CategoriesList;
