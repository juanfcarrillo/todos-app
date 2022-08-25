import { useEffect, useRef, useState } from "react";
import { collection, addDoc, doc, updateDoc} from "firebase/firestore";

import firestore from "../../services/firebase";

const FormTodoBase = ({ children, exitForm, id , ...props}) => {

  const [formValues, setFormValues] = useState({
    categoryName: props.inputContent ? props.inputContent: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { categoryName } = formValues

    if (categoryName.trim() !== "") {
      exitForm()

      const categoryCollection = collection(firestore, 'categories')

      if(!id){
        const docRef = await addDoc(categoryCollection, {
          categoryName: categoryName
        })
      }else{
        const categoryDocument = doc(firestore, 'categories', id)
        const docRef = await updateDoc(categoryDocument, {
          categoryName: categoryName
        })
      }
    }
  }

  const handleChange = (e) => {
    setFormValues((formValues) => {
      return {
        ...formValues,
        [e.target.name]: e.target.value,
      }
    })
  }

  const refInputName = useRef()

  useEffect(() => {
    refInputName.current.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit} className="pop-up g-2">
      <div className="f g-1">
        <input
          type="text"
          name="categoryName"
          onChange={handleChange}
          autoComplete="off"
          className="pop-up-input shadow"
          value={formValues["categoryName"]}
          ref={refInputName}
        />
        <button className="button shadow border">Aceptar</button>
      </div>
      {children}
   </form>
  )
}

export default FormTodoBase;
