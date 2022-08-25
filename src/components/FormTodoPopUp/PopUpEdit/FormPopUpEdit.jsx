import { Children, useEffect, useRef, useState } from "react"
import { FiTrash } from 'react-icons/fi'
import firestore from '../../../services/firebase';
import FormTodoBase from '../FormTodoBase'
import { doc, deleteDoc } from "firebase/firestore";

const FormPopUpEdit = ({exitForm, id, ...props}) => {

  const handleDelete = async ({id}) => {
    exitForm()
    await deleteDoc(doc(firestore, 'categories', id))
  }
  
  return(
    <>
      <div className="pop-up-background" onClick={exitForm}/>
      <FormTodoBase exitForm={exitForm} inputContent={props.content}>
          <button className="button shadow border" onClick={() => handleDelete({id})}><FiTrash/></button>
      </FormTodoBase>
    </>
  )
}

export default FormPopUpEdit