import { useState } from "react"
import FormTodoEdit from "./FormTodoEdit"

const FormPopUpEdit = ({exitForm, id}) => {
  
    return(
      <>
        <div className="pop-up-background" onClick={exitForm}/>
        <FormTodoEdit exitForm={exitForm} id={id}/>
      </>
    )
}

export default FormPopUpEdit