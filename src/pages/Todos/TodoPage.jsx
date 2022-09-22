import { useParams } from "react-router-dom"
import { TodosList } from "./Components"
import { CategoryIDProvider } from "../../context"
import { useState } from "react"
import { AddButton } from "../../components"
import { AddTodo } from "./Components"

const TodoPage = () => {

    const { categoryID } = useParams()

    const [showElements, setShowElements] = useState({
        formTodo: false
      })
    
    const handleAddButton = () => {
      setShowElements((showElements) => {return {...showElements, formTodo: true}})
    }
    
    const exitForm = () => {
      setShowElements((showElements) => {return {...showElements, formTodo: false}})
    }

    return(
        <CategoryIDProvider id={categoryID}>
            <div className="container container-todos">
            {showElements.formTodo && <AddTodo exitForm={exitForm}/>}
            <AddButton handleAddButton={handleAddButton}/>
                <TodosList/>
            </div>
        </CategoryIDProvider>
    )
}

export default TodoPage
