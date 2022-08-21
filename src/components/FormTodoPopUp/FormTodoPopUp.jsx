import { useState } from "react"
import FormTodoBase from "./FormTodoBase"

const FormTodoPopUp = ({exitForm}) => {
  
    return(
      <>
        <div className="pop-up-background" onClick={exitForm}/>
        <FormTodoBase exitForm={exitForm}/>
      </>
    )
}

export default FormTodoPopUp