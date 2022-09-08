import { useParams } from "react-router-dom"
import CategoryIDContext from "../../context/CategoryIDContext"
import { TodosList } from "./Components"

export const TodoPage = () => {

    const { categoryID } = useParams()

    return(
        <CategoryIDContext id={categoryID}>
            <div className="container container-todos">
                <TodosList/>
            </div>
        </CategoryIDContext>
    )
}

