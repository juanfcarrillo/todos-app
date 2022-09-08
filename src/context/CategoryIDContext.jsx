import { createContext } from "react"

export const CategoryID = createContext()

const CategoryIDContext = ({children, id}) => {

    const value = {
        id
    }

    return(
        <CategoryID.Provider value={{value}}>
            {children}
        </CategoryID.Provider>
    )
}

export default CategoryIDContext