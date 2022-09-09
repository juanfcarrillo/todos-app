import { createContext } from "react"

export const CategoryIDContext = createContext()

export const CategoryIDProvider = ({children, id}) => {

    const value = {
        CategoryID : id
    }

    return(
        <CategoryIDContext.Provider value={value}>
            {children}
        </CategoryIDContext.Provider>
    )
}